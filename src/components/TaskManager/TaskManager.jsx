import React, { useState, useEffect } from 'react';
import { 
  Paper, Box, Typography, Button, IconButton, 
  TextField, Checkbox, Chip, Menu, MenuItem,
  List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction,
  Dialog, DialogTitle, DialogContent, DialogActions,
  FormControl, InputLabel, Select, Grid, Divider,
  Tabs, Tab, Tooltip, Badge, Avatar, InputAdornment
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Icons
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FlagIcon from '@mui/icons-material/Flag';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CommentIcon from '@mui/icons-material/Comment';
import LabelIcon from '@mui/icons-material/Label';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

// Styles
import './TaskManager.css';

// Date utilities
import { format, isAfter, isBefore, addDays } from 'date-fns';
import { he } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

export const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    priority: [],
    assignee: [],
    dueDate: 'all'
  });
  const [sortBy, setSortBy] = useState('dueDate');
  const [newTask, setNewTask] = useState({
    id: '',
    title: '',
    description: '',
    dueDate: addDays(new Date(), 1),
    priority: 'medium',
    status: 'pending',
    assignee: '',
    labels: [],
    attachments: [],
    comments: [],
    createdAt: new Date(),
    completedAt: null
  });
  const [editMode, setEditMode] = useState(false);
  const [taskDetailOpen, setTaskDetailOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [newLabel, setNewLabel] = useState('');

  // Fetch tasks from API or localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem('taskManagerTasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks).map(task => ({
        ...task,
        dueDate: new Date(task.dueDate),
        createdAt: new Date(task.createdAt),
        completedAt: task.completedAt ? new Date(task.completedAt) : null
      }));
      setTasks(parsedTasks);
    }
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...tasks];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply tab filter
    if (currentTab === 0) {
      result = result.filter(task => task.status === 'pending');
    } else if (currentTab === 1) {
      result = result.filter(task => task.status === 'completed');
    }
    
    // Apply priority filter
    if (activeFilters.priority.length > 0) {
      result = result.filter(task => activeFilters.priority.includes(task.priority));
    }
    
    // Apply assignee filter
    if (activeFilters.assignee.length > 0) {
      result = result.filter(task => activeFilters.assignee.includes(task.assignee));
    }
    
    // Apply due date filter
    if (activeFilters.dueDate !== 'all') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (activeFilters.dueDate === 'today') {
        const tomorrow = addDays(today, 1);
        result = result.filter(task => 
          isAfter(task.dueDate, today) && isBefore(task.dueDate, tomorrow)
        );
      } else if (activeFilters.dueDate === 'week') {
        const nextWeek = addDays(today, 7);
        result = result.filter(task => 
          isAfter(task.dueDate, today) && isBefore(task.dueDate, nextWeek)
        );
      } else if (activeFilters.dueDate === 'overdue') {
        result = result.filter(task => 
          isBefore(task.dueDate, today) && task.status !== 'completed'
        );
      }
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'dueDate') {
        return a.dueDate - b.dueDate;
      } else if (sortBy === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'createdAt') {
        return b.createdAt - a.createdAt;
      }
      return 0;
    });
    
    setFilteredTasks(result);
  }, [tasks, searchQuery, currentTab, activeFilters, sortBy]);

  // Save tasks to localStorage when updated
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('taskManagerTasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    handleSortClose();
  };

  const handleFilterChange = (type, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      
      if (type === 'priority' || type === 'assignee') {
        if (newFilters[type].includes(value)) {
          newFilters[type] = newFilters[type].filter(item => item !== value);
        } else {
          newFilters[type] = [...newFilters[type], value];
        }
      } else if (type === 'dueDate') {
        newFilters.dueDate = value;
      }
      
      return newFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      priority: [],
      assignee: [],
      dueDate: 'all'
    });
    handleFilterClose();
  };

  const handleAddTask = () => {
    setNewTask({
      id: '',
      title: '',
      description: '',
      dueDate: addDays(new Date(), 1),
      priority: 'medium',
      status: 'pending',
      assignee: '',
      labels: [],
      attachments: [],
      comments: [],
      createdAt: new Date(),
      completedAt: null
    });
    setEditMode(false);
    setDialogOpen(true);
  };

  const handleEditTask = (task) => {
    setNewTask({ ...task });
    setEditMode(true);
    setDialogOpen(true);
  };

  const handleSaveTask = () => {
    if (editMode) {
      // Update existing task
      setTasks(tasks.map(task => 
        task.id === newTask.id ? { ...newTask } : task
      ));
    } else {
      // Add new task
      const taskWithId = { ...newTask, id: Date.now().toString() };
      setTasks([...tasks, taskWithId]);
    }
    
    setDialogOpen(false);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    setTaskDetailOpen(false);
  };

  const handleToggleStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newStatus = task.status === 'completed' ? 'pending' : 'completed';
        return { 
          ...task, 
          status: newStatus,
          completedAt: newStatus === 'completed' ? new Date() : null
        };
      }
      return task;
    }));
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setTaskDetailOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleDateChange = (date) => {
    setNewTask({ ...newTask, dueDate: date });
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now().toString(),
      text: newComment,
      createdAt: new Date(),
      author: 'מנהל המערכת' // Replace with actual user
    };
    
    const updatedTask = { 
      ...selectedTask, 
      comments: [...selectedTask.comments, comment] 
    };
    
    setTasks(tasks.map(task => 
      task.id === selectedTask.id ? updatedTask : task
    ));
    
    setSelectedTask(updatedTask);
    setNewComment('');
  };

  const handleAddLabel = () => {
    if (!newLabel.trim()) return;
    
    if (!selectedTask.labels.includes(newLabel)) {
      const updatedTask = { 
        ...selectedTask, 
        labels: [...selectedTask.labels, newLabel] 
      };
      
      setTasks(tasks.map(task => 
        task.id === selectedTask.id ? updatedTask : task
      ));
      
      setSelectedTask(updatedTask);
    }
    
    setNewLabel('');
  };

  const handleRemoveLabel = (label) => {
    const updatedTask = { 
      ...selectedTask, 
      labels: selectedTask.labels.filter(l => l !== label) 
    };
    
    setTasks(tasks.map(task => 
      task.id === selectedTask.id ? updatedTask : task
    ));
    
    setSelectedTask(updatedTask);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(filteredTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    // Update the order in the original tasks array
    const updatedTasks = [...tasks];
    const taskIds = items.map(item => item.id);
    
    // Reorder the original tasks array based on the new order
    updatedTasks.sort((a, b) => {
      return taskIds.indexOf(a.id) - taskIds.indexOf(b.id);
    });
    
    setTasks(updatedTasks);
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#f44336';
      case 'medium': return '#ff9800';
      case 'low': return '#4caf50';
      default: return '#9e9e9e';
    }
  };

  const getPriorityLabel = (priority) => {
    switch(priority) {
      case 'high': return 'גבוהה';
      case 'medium': return 'בינונית';
      case 'low': return 'נמוכה';
      default: return '';
    }
  };

  const getAssigneeInitials = (name) => {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (date) => {
    if (!date) return '';
    return format(new Date(date), 'dd/MM/yyyy', { locale: he });
  };

  const renderTaskList = () => {
    return (
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="task-list"
            >
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
                        onClick={() => handleTaskClick(task)}
                      >
                        <ListItemIcon className="task-checkbox">
                          <Checkbox
                            edge="start"
                            checked={task.status === 'completed'}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleToggleStatus(task.id);
                            }}
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={<CheckCircleIcon />}
                            className={`priority-${task.priority}`}
                          />
                        </ListItemIcon>
                            
                        <ListItemText
                          primary={task.title}
                          secondary={
                            <Box className="task-details">
                              <Box className="task-meta">
                                <Box className="task-due-date">
                                  <DateRangeIcon fontSize="small" />
                                  <Typography variant="caption">
                                    {formatDate(task.dueDate)}
                                  </Typography>
                                </Box>
                                    
                                {task.assignee && (
                                  <Box className="task-assignee">
                                    <Tooltip title={task.assignee}>
                                      <Avatar className="assignee-avatar">
                                        {getAssigneeInitials(task.assignee)}
                                      </Avatar>
                                    </Tooltip>
                                  </Box>
                                )}
                                    
                                {task.labels.length > 0 && (
                                  <Box className="task-labels">
                                    {task.labels.slice(0, 2).map(label => (
                                      <Chip 
                                        key={label} 
                                        label={label} 
                                        size="small" 
                                        className="task-label"
                                        onClick={(e) => e.stopPropagation()}
                                      />
                                    ))}
                                    {task.labels.length > 2 && (
                                      <Chip
                                        label={`+${task.labels.length - 2}`}
                                        size="small"
                                        className="task-label-more"
                                        onClick={(e) => e.stopPropagation()}
                                      />
                                    )}
                                  </Box>
                                )}
                              </Box>
                            </Box>
                          }
                        />
                              
                        <ListItemSecondaryAction>
                          <Box className="task-actions">
                            <Tooltip title="עריכה">
                              <IconButton 
                                edge="end" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditTask(task);
                                }}
                                size="small"
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                                  
                            <Tooltip title="מחיקה">
                              <IconButton 
                                edge="end" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteTask(task.id);
                                }}
                                size="small"
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </Draggable>
                ))
              ) : (
                <Box className="no-tasks">
                  <AssignmentIcon className="no-tasks-icon" />
                  <Typography variant="h6">אין משימות</Typography>
                  <Typography variant="body2">
                    {currentTab === 0
                      ? 'אין משימות פעילות. הוסף משימה חדשה כדי להתחיל.'
                      : 'אין משימות שהושלמו.'}
                  </Typography>
                  {currentTab === 0 && (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={handleAddTask}
                      className="add-task-button"
                    >
                      הוסף משימה
                    </Button>
                  )}
                </Box>
              )}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

  return (
    <Box className="task-manager-container">
      <Paper className="task-manager-paper">
        <Box className="task-manager-header">
          <Box className="task-manager-title">
            <AssignmentIcon className="title-icon" />
            <Typography variant="h5">ניהול משימות</Typography>
          </Box>
          
          <Box className="task-manager-actions">
            <TextField
              placeholder="חיפוש משימות..."
              variant="outlined"
              size="small"
              className="search-field"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <Box className="filter-actions">
              <Tooltip title="סינון">
                <Badge
                  badgeContent={
                    activeFilters.priority.length +
                    activeFilters.assignee.length +
                    (activeFilters.dueDate !== 'all' ? 1 : 0)
                  }
                  color="primary"
                  invisible={
                    activeFilters.priority.length === 0 &&
                    activeFilters.assignee.length === 0 &&
                    activeFilters.dueDate === 'all'
                  }
                >
                  <Button
                    startIcon={<FilterListIcon />}
                    onClick={handleFilterClick}
                    variant="outlined"
                    size="small"
                  >
                    סינון
                  </Button>
                </Badge>
              </Tooltip>
              
              <Menu
                anchorEl={filterAnchorEl}
                open={Boolean(filterAnchorEl)}
                onClose={handleFilterClose}
                className="filter-menu"
              >
                <Box className="filter-menu-content">
                  <Typography variant="subtitle2" className="filter-section-title">
                    עדיפות
                  </Typography>
                  <Box className="filter-options">
                    {['high', 'medium', 'low'].map(priority => (
                      <MenuItem
                        key={priority}
                        onClick={() => handleFilterChange('priority', priority)}
                        className={
                          activeFilters.priority.includes(priority)
                            ? 'filter-option selected'
                            : 'filter-option'
                        }
                      >
                        <ListItemIcon>
                          <FlagIcon style={{ color: getPriorityColor(priority) }} />
                        </ListItemIcon>
                        <ListItemText primary={getPriorityLabel(priority)} />
                      </MenuItem>
                    ))}
                  </Box>
                  
                  <Divider className="filter-divider" />
                  
                  <Typography variant="subtitle2" className="filter-section-title">
                    תאריך יעד
                  </Typography>
                  <Box className="filter-options">
                    {[
                      { value: 'all', label: 'הכל' },
                      { value: 'today', label: 'היום' },
                      { value: 'week', label: 'השבוע' },
                      { value: 'overdue', label: 'באיחור' }
                    ].map(option => (
                      <MenuItem
                        key={option.value}
                        onClick={() => handleFilterChange('dueDate', option.value)}
                        className={
                          activeFilters.dueDate === option.value
                            ? 'filter-option selected'
                            : 'filter-option'
                        }
                      >
                        <ListItemText primary={option.label} />
                      </MenuItem>
                    ))}
                  </Box>
                  
                  <Box className="filter-actions">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={clearFilters}
                      className="clear-filters-button"
                    >
                      נקה סינון
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleFilterClose}
                      color="primary"
                    >
                      סגור
                    </Button>
                  </Box>
                </Box>
              </Menu>
              
              <Tooltip title="מיון">
                <Button
                  startIcon={<SortIcon />}
                  onClick={handleSortClick}
                  variant="outlined"
                  size="small"
                >
                  מיון
                </Button>
              </Tooltip>
              
              <Menu
                anchorEl={sortAnchorEl}
                open={Boolean(sortAnchorEl)}
                onClose={handleSortClose}
                className="sort-menu"
              >
                {[
                  { value: 'dueDate', label: 'תאריך יעד' },
                  { value: 'priority', label: 'עדיפות' },
                  { value: 'title', label: 'כותרת' },
                  { value: 'createdAt', label: 'תאריך יצירה' }
                ].map(option => (
                  <MenuItem
                    key={option.value}
                    onClick={() => handleSortChange(option.value)}
                    className={
                      sortBy === option.value
                        ? 'sort-option selected'
                        : 'sort-option'
                    }
                  >
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </Menu>
              
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddTask}
                className="add-task-button"
              >
                משימה חדשה
              </Button>
            </Box>
          </Box>
        </Box>
        
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          className="task-tabs"
          variant="fullWidth"
        >
          <Tab
            icon={<AssignmentLateIcon />}
            label={`משימות פעילות (${tasks.filter(t => t.status === 'pending').length})`}
          />
          <Tab
            icon={<AssignmentTurnedInIcon />}
            label={`משימות שהושלמו (${tasks.filter(t => t.status === 'completed').length})`}
          />
        </Tabs>
        
        <Box className="task-content">
          {renderTaskList()}
        </Box>
      </Paper>
      
      {/* Add/Edit Task Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        className="task-dialog"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {editMode ? 'עריכת משימה' : 'משימה חדשה'}
        </DialogTitle>
        
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                name="title"
                label="כותרת"
                type="text"
                fullWidth
                variant="outlined"
                value={newTask.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="description"
                name="description"
                label="תיאור"
                type="text"
                fullWidth
                variant="outlined"
                multiline
                rows={3}
                value={newTask.description}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={he}>
                <DatePicker
                  label="תאריך יעד"
                  value={newTask.dueDate}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth variant="outlined" />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="priority-label">עדיפות</InputLabel>
                <Select
                  labelId="priority-label"
                  id="priority"
                  name="priority"
                  value={newTask.priority}
                  onChange={handleInputChange}
                  label="עדיפות"
                >
                  <MenuItem value="high">גבוהה</MenuItem>
                  <MenuItem value="medium">בינונית</MenuItem>
                  <MenuItem value="low">נמוכה</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="assignee"
                name="assignee"
                label="אחראי"
                type="text"
                fullWidth
                variant="outlined"
                value={newTask.assignee}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="inherit">
            ביטול
          </Button>
          <Button 
            onClick={handleSaveTask} 
            color="primary" 
            variant="contained"
            disabled={!newTask.title}
          >
            {editMode ? 'עדכן' : 'הוסף'} משימה
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Task Detail Dialog */}
      <Dialog
        open={taskDetailOpen}
        onClose={() => setTaskDetailOpen(false)}
        className="task-detail-dialog"
        fullWidth
        maxWidth="md"
      >
        {selectedTask && (
          <>
            <DialogTitle className="task-detail-header">
              <Box className="task-detail-title">
                <Checkbox
                  checked={selectedTask.status === 'completed'}
                  onChange={() => handleToggleStatus(selectedTask.id)}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  className={`priority-${selectedTask.priority}`}
                />
                <Typography variant="h6">{selectedTask.title}</Typography>
              </Box>
              <Box className="task-detail-actions">
                <Tooltip title="עריכה">
                  <IconButton
                    onClick={() => {
                      setTaskDetailOpen(false);
                      handleEditTask(selectedTask);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="מחיקה">
                  <IconButton
                    onClick={() => handleDeleteTask(selectedTask.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  onClick={() => setTaskDetailOpen(false)}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            
            <DialogContent className="task-detail-content">
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Box className="task-detail-section">
                    <Typography variant="subtitle1" className="section-title">
                      תיאור
                    </Typography>
                    <Typography variant="body1" className="task-description">
                      {selectedTask.description || 'אין תיאור למשימה זו.'}
                    </Typography>
                  </Box>
                  
                  <Divider className="section-divider" />
                  
                  <Box className="task-detail-section">
                    <Typography variant="subtitle1" className="section-title">
                      תגיות
                    </Typography>
                    <Box className="task-labels-container">
                      {selectedTask.labels.length > 0 ? (
                        <Box className="task-labels-list">
                          {selectedTask.labels.map(label => (
                            <Chip
                              key={label}
                              label={label}
                              onDelete={() => handleRemoveLabel(label)}
                              className="task-detail-label"
                            />
                          ))}
                        </Box>
                      ) : (
                        <Typography variant="body2" className="no-labels">
                          אין תגיות למשימה זו.
                        </Typography>
                      )}
                      
                      <Box className="add-label-form">
                        <TextField
                          placeholder="הוסף תגית חדשה"
                          variant="outlined"
                          size="small"
                          value={newLabel}
                          onChange={(e) => setNewLabel(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleAddLabel();
                            }
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LabelIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={handleAddLabel}
                          disabled={!newLabel.trim()}
                        >
                          הוסף
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Divider className="section-divider" />
                  
                  <Box className="task-detail-section">
                    <Typography variant="subtitle1" className="section-title">
                      הערות
                    </Typography>
                    <Box className="comments-container">
                      {selectedTask.comments.length > 0 ? (
                        <List className="comments-list">
                          {selectedTask.comments.map(comment => (
                            <ListItem key={comment.id} className="comment-item">
                              <Avatar className="comment-avatar">
                                {getAssigneeInitials(comment.author)}
                              </Avatar>
                              <Box className="comment-content">
                                <Box className="comment-header">
                                  <Typography variant="subtitle2" className="comment-author">
                                    {comment.author}
                                  </Typography>
                                  <Typography variant="caption" className="comment-date">
                                    {formatDate(comment.createdAt)}
                                  </Typography>
                                </Box>
                                <Typography variant="body2" className="comment-text">
                                  {comment.text}
                                </Typography>
                              </Box>
                            </ListItem>
                          ))}
                        </List>
                      ) : (
                        <Typography variant="body2" className="no-comments">
                          אין הערות למשימה זו.
                        </Typography>
                      )}
                      
                      <Box className="add-comment-form">
                        <TextField
                          placeholder="הוסף הערה..."
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={2}
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CommentIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleAddComment}
                          disabled={!newComment.trim()}
                          className="add-comment-button"
                        >
                          הוסף הערה
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Paper className="task-details-sidebar">
                    <Box className="sidebar-section">
                      <Typography variant="subtitle2" className="sidebar-label">
                        סטטוס
                      </Typography>
                      <Chip
                        label={selectedTask.status === 'completed' ? 'הושלם' : 'בתהליך'}
                        color={selectedTask.status === 'completed' ? 'success' : 'primary'}
                        icon={selectedTask.status === 'completed' ? <DoneAllIcon /> : <AccessTimeIcon />}
                        className="status-chip"
                      />
                    </Box>
                    
                    <Box className="sidebar-section">
                      <Typography variant="subtitle2" className="sidebar-label">
                        עדיפות
                      </Typography>
                      <Chip
                        label={getPriorityLabel(selectedTask.priority)}
                        icon={<FlagIcon />}
                        style={{ 
                          backgroundColor: `${getPriorityColor(selectedTask.priority)}20`,
                          color: getPriorityColor(selectedTask.priority)
                        }}
                        className="priority-chip"
                      />
                    </Box>
                    
                    <Box className="sidebar-section">
                      <Typography variant="subtitle2" className="sidebar-label">
                        תאריך יעד
                      </Typography>
                      <Box className="sidebar-value date-value">
                        <DateRangeIcon className="sidebar-icon" />
                        <Typography variant="body2">
                          {formatDate(selectedTask.dueDate)}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {selectedTask.assignee && (
                      <Box className="sidebar-section">
                        <Typography variant="subtitle2" className="sidebar-label">
                          אחראי
                        </Typography>
                        <Box className="sidebar-value assignee-value">
                          <Avatar className="sidebar-avatar">
                            {getAssigneeInitials(selectedTask.assignee)}
                          </Avatar>
                          <Typography variant="body2">
                            {selectedTask.assignee}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    
                    <Box className="sidebar-section">
                      <Typography variant="subtitle2" className="sidebar-label">
                        נוצר בתאריך
                      </Typography>
                      <Box className="sidebar-value date-value">
                        <AccessTimeIcon className="sidebar-icon" />
                        <Typography variant="body2">
                          {formatDate(selectedTask.createdAt)}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {selectedTask.completedAt && (
                      <Box className="sidebar-section">
                        <Typography variant="subtitle2" className="sidebar-label">
                          הושלם בתאריך
                        </Typography>
                        <Box className="sidebar-value date-value">
                          <DoneAllIcon className="sidebar-icon" />
                          <Typography variant="body2">
                            {formatDate(selectedTask.completedAt)}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    
                    <Box className="sidebar-section">
                      <Typography variant="subtitle2" className="sidebar-label">
                        קבצים מצורפים
                      </Typography>
                      {selectedTask.attachments.length > 0 ? (
                        <List className="attachments-list">
                          {selectedTask.attachments.map(attachment => (
                            <ListItem key={attachment.id} className="attachment-item">
                              <AttachFileIcon className="attachment-icon" />
                              <Typography variant="body2" className="attachment-name">
                                {attachment.name}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      ) : (
                        <Typography variant="body2" className="no-attachments">
                          אין קבצים מצורפים.
                        </Typography>
                      )}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};
// import React, { useState, useEffect } from 'react';
// import { 
//   Paper, Box, Typography, Button, IconButton, 
//   TextField, Checkbox, Chip, Menu, MenuItem,
//   List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction,
//   Dialog, DialogTitle, DialogContent, DialogActions,
//   FormControl, InputLabel, Select, Grid, Divider,
//   Tabs, Tab, Tooltip, Badge, Avatar, InputAdornment
// } from '@mui/material';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// // Icons
// import AddIcon from '@mui/icons-material/Add';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SearchIcon from '@mui/icons-material/Search';
// import SortIcon from '@mui/icons-material/Sort';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import FlagIcon from '@mui/icons-material/Flag';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import PersonIcon from '@mui/icons-material/Person';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import CommentIcon from '@mui/icons-material/Comment';
// import LabelIcon from '@mui/icons-material/Label';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

// // Styles
// import './TaskManager.css';

// // Date utilities
// import { format, isAfter, isBefore, addDays } from 'date-fns';
// import { he } from 'date-fns/locale';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

// export const TaskManager = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [currentTab, setCurrentTab] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [sortAnchorEl, setSortAnchorEl] = useState(null);
//   const [activeFilters, setActiveFilters] = useState({
//     priority: [],
//     assignee: [],
//     dueDate: 'all'
//   });
//   const [sortBy, setSortBy] = useState('dueDate');
//   const [newTask, setNewTask] = useState({
//     id: '',
//     title: '',
//     description: '',
//     dueDate: addDays(new Date(), 1),
//     priority: 'medium',
//     status: 'pending',
//     assignee: '',
//     labels: [],
//     attachments: [],
//     comments: [],
//     createdAt: new Date(),
//     completedAt: null
//   });
//   const [editMode, setEditMode] = useState(false);
//   const [taskDetailOpen, setTaskDetailOpen] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [newComment, setNewComment] = useState('');
//   const [newLabel, setNewLabel] = useState('');

//   // Fetch tasks from API or localStorage
//   useEffect(() => {
//     const storedTasks = localStorage.getItem('taskManagerTasks');
//     if (storedTasks) {
//       const parsedTasks = JSON.parse(storedTasks).map(task => ({
//         ...task,
//         dueDate: new Date(task.dueDate),
//         createdAt: new Date(task.createdAt),
//         completedAt: task.completedAt ? new Date(task.completedAt) : null
//       }));
//       setTasks(parsedTasks);
//     }
//   }, []);

//   // Apply filters and sorting
//   useEffect(() => {
//     let result = [...tasks];
    
//     // Apply search filter
//     if (searchQuery) {
//       result = result.filter(task => 
//         task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         task.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Apply tab filter
//     if (currentTab === 0) {
//       result = result.filter(task => task.status === 'pending');
//     } else if (currentTab === 1) {
//       result = result.filter(task => task.status === 'completed');
//     }
    
//     // Apply priority filter
//     if (activeFilters.priority.length > 0) {
//       result = result.filter(task => activeFilters.priority.includes(task.priority));
//     }
    
//     // Apply assignee filter
//     if (activeFilters.assignee.length > 0) {
//       result = result.filter(task => activeFilters.assignee.includes(task.assignee));
//     }
    
//     // Apply due date filter
//     if (activeFilters.dueDate !== 'all') {
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
      
//       if (activeFilters.dueDate === 'today') {
//         const tomorrow = addDays(today, 1);
//         result = result.filter(task => 
//           isAfter(task.dueDate, today) && isBefore(task.dueDate, tomorrow)
//         );
//       } else if (activeFilters.dueDate === 'week') {
//         const nextWeek = addDays(today, 7);
//         result = result.filter(task => 
//           isAfter(task.dueDate, today) && isBefore(task.dueDate, nextWeek)
//         );
//       } else if (activeFilters.dueDate === 'overdue') {
//         result = result.filter(task => 
//           isBefore(task.dueDate, today) && task.status !== 'completed'
//         );
//       }
//     }
    
//     // Apply sorting
//     result.sort((a, b) => {
//       if (sortBy === 'dueDate') {
//         return a.dueDate - b.dueDate;
//       } else if (sortBy === 'priority') {
//         const priorityOrder = { high: 0, medium: 1, low: 2 };
//         return priorityOrder[a.priority] - priorityOrder[b.priority];
//       } else if (sortBy === 'title') {
//         return a.title.localeCompare(b.title);
//       } else if (sortBy === 'createdAt') {
//         return b.createdAt - a.createdAt;
//       }
//       return 0;
//     });
    
//     setFilteredTasks(result);
//   }, [tasks, searchQuery, currentTab, activeFilters, sortBy]);

//   // Save tasks to localStorage when updated
//   useEffect(() => {
//     if (tasks.length > 0) {
//       localStorage.setItem('taskManagerTasks', JSON.stringify(tasks));
//     }
//   }, [tasks]);

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleFilterClick = (event) => {
//     setFilterAnchorEl(event.currentTarget);
//   };

//   const handleFilterClose = () => {
//     setFilterAnchorEl(null);
//   };

//   const handleSortClick = (event) => {
//     setSortAnchorEl(event.currentTarget);
//   };

//   const handleSortClose = () => {
//     setSortAnchorEl(null);
//   };

//   const handleSortChange = (value) => {
//     setSortBy(value);
//     handleSortClose();
//   };

//   const handleFilterChange = (type, value) => {
//     setActiveFilters(prev => {
//       const newFilters = { ...prev };
      
//       if (type === 'priority' || type === 'assignee') {
//         if (newFilters[type].includes(value)) {
//           newFilters[type] = newFilters[type].filter(item => item !== value);
//         } else {
//           newFilters[type] = [...newFilters[type], value];
//         }
//       } else if (type === 'dueDate') {
//         newFilters.dueDate = value;
//       }
      
//       return newFilters;
//     });
//   };

//   const clearFilters = () => {
//     setActiveFilters({
//       priority: [],
//       assignee: [],
//       dueDate: 'all'
//     });
//     handleFilterClose();
//   };

//   const handleAddTask = () => {
//     setNewTask({
//       id: '',
//       title: '',
//       description: '',
//       dueDate: addDays(new Date(), 1),
//       priority: 'medium',
//       status: 'pending',
//       assignee: '',
//       labels: [],
//       attachments: [],
//       comments: [],
//       createdAt: new Date(),
//       completedAt: null
//     });
//     setEditMode(false);
//     setDialogOpen(true);
//   };

//   const handleEditTask = (task) => {
//     setNewTask({ ...task });
//     setEditMode(true);
//     setDialogOpen(true);
//   };

//   const handleSaveTask = () => {
//     if (editMode) {
//       // Update existing task
//       setTasks(tasks.map(task => 
//         task.id === newTask.id ? { ...newTask } : task
//       ));
//     } else {
//       // Add new task
//       const taskWithId = { ...newTask, id: Date.now().toString() };
//       setTasks([...tasks, taskWithId]);
//     }
    
//     setDialogOpen(false);
//   };

//   const handleDeleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//     setTaskDetailOpen(false);
//   };

//   const handleToggleStatus = (id) => {
//     setTasks(tasks.map(task => {
//       if (task.id === id) {
//         const newStatus = task.status === 'completed' ? 'pending' : 'completed';
//         return { 
//           ...task, 
//           status: newStatus,
//           completedAt: newStatus === 'completed' ? new Date() : null
//         };
//       }
//       return task;
//     }));
//   };

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//     setTaskDetailOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewTask({ ...newTask, [name]: value });
//   };

//   const handleDateChange = (date) => {
//     setNewTask({ ...newTask, dueDate: date });
//   };

//   const handleAddComment = () => {
//     if (!newComment.trim()) return;
    
//     const comment = {
//       id: Date.now().toString(),
//       text: newComment,
//       createdAt: new Date(),
//       author: 'מנהל המערכת' // Replace with actual user
//     };
    
//     const updatedTask = { 
//       ...selectedTask, 
//       comments: [...selectedTask.comments, comment] 
//     };
    
//     setTasks(tasks.map(task => 
//       task.id === selectedTask.id ? updatedTask : task
//     ));
    
//     setSelectedTask(updatedTask);
//     setNewComment('');
//   };

//   const handleAddLabel = () => {
//     if (!newLabel.trim()) return;
    
//     if (!selectedTask.labels.includes(newLabel)) {
//       const updatedTask = { 
//         ...selectedTask, 
//         labels: [...selectedTask.labels, newLabel] 
//       };
      
//       setTasks(tasks.map(task => 
//         task.id === selectedTask.id ? updatedTask : task
//       ));
      
//       setSelectedTask(updatedTask);
//     }
    
//     setNewLabel('');
//   };

//   const handleRemoveLabel = (label) => {
//     const updatedTask = { 
//       ...selectedTask, 
//       labels: selectedTask.labels.filter(l => l !== label) 
//     };
    
//     setTasks(tasks.map(task => 
//       task.id === selectedTask.id ? updatedTask : task
//     ));
    
//     setSelectedTask(updatedTask);
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
    
//     const items = Array.from(filteredTasks);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
    
//     // Update the order in the original tasks array
//     const updatedTasks = [...tasks];
//     const taskIds = items.map(item => item.id);
    
//     // Reorder the original tasks array based on the new order
//     updatedTasks.sort((a, b) => {
//       return taskIds.indexOf(a.id) - taskIds.indexOf(b.id);
//     });
    
//     setTasks(updatedTasks);
//   };

//   const getPriorityColor = (priority) => {
//     switch(priority) {
//       case 'high': return '#f44336';
//       case 'medium': return '#ff9800';
//       case 'low': return '#4caf50';
//       default: return '#9e9e9e';
//     }
//   };

//   const getPriorityLabel = (priority) => {
//     switch(priority) {
//       case 'high': return 'גבוהה';
//       case 'medium': return 'בינונית';
//       case 'low': return 'נמוכה';
//       default: return '';
//     }
//   };

//   const getAssigneeInitials = (name) => {
//     if (!name) return '';
//     return name.split(' ').map(n => n[0]).join('').toUpperCase();
//   };

//   const formatDate = (date) => {
//     if (!date) return '';
//     return format(new Date(date), 'dd/MM/yyyy', { locale: he });
//   };

//   const renderTaskList = () => {
//     return (
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="tasks">
//           {(provided) => (
//             <List
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               className="task-list"
//             >
//               {filteredTasks.length > 0 ? (
//                 filteredTasks.map((task, index) => (
//                   <Draggable key={task.id} draggableId={task.id} index={index}>
//                     {(provided) => (
//                       <ListItem
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
//                         onClick={() => handleTaskClick(task)}
//                       >
//                         <ListItemIcon className="task-checkbox">
//                           <Checkbox
//                             edge="start"
//                             checked={task.status === 'completed'}
//                             onChange={(e) => {
//                               e.stopPropagation();
//                               handleToggleStatus(task.id);
//                             }}
//                             icon={<RadioButtonUncheckedIcon />}
//                             checkedIcon={<CheckCircleIcon />}
//                             className={`priority-${task.priority}`}
//                           />
//                         </ListItemIcon>
                        
//                         <ListItemText
//                           primary={task.title}
//                           secondary={
//                             <Box className="task-details">
//                               <Box className="task-meta">
//                                 <Box className="task-due-date">
//                                   <DateRangeIcon fontSize="small" />
//                                   <Typography variant="caption">
//                                     {formatDate(task.dueDate)}
//                                   </Typography>
//                                 </Box>
                                
//                                 {task.assignee && (
//                                   <Box className="task-assignee">
//                                     <Tooltip title={task.assignee}>
//                                       <Avatar className="assignee-avatar">
//                                         {getAssigneeInitials(task.assignee)}
//                                       </Avatar>
//                                     </Tooltip>
//                                   </Box>
//                                 )}
//                               </Box>
                              
//                               {task.labels.length > 0 && (
//                                 <Box className="task-labels">
//                                   {task.labels.slice(0, 2).map(label => (
//                                     <Chip
//                                       key={label}
//                                       label={label}
//                                       size="small"
//                                       className="task-label"
//                                       onClick={(e) => e.stopPropagation()}
//                                     />
//                                   ))}
//                                   {task.labels.length > 2 && (
//                                     <Chip
//                                       label={`+${task.labels.length - 2}`}
//                                       size="small"
//                                       className="task-label-more"
//                                       onClick={(e) => e.stopPropagation()}
//                                     />
//                                   )}
//                                 </Box>
//                               )}
//                             </Box>
//                           }
//                         />
                        
//                         <ListItemSecondaryAction>
//                           <Box className="task-actions">
//                             <Tooltip title="עריכה">
//                               <IconButton