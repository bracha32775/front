
// import * as React from 'react';
// import { 
//   AppBar, 
//   Box, 
//   Toolbar, 
//   Button, 
//   IconButton, 
//   Typography,
//   Tooltip,
//   Menu,
//   MenuItem,
//   Container,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
// import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
// import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
// import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './MyAppBar.css';

// export default function MyAppBar() {
//   const nav = useNavigate();
//   const location = useLocation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [drawerOpen, setDrawerOpen] = React.useState(false);
  
//   const menuItems = [
//     { 
//       label: 'קורסים', 
//       path: '/Course', 
//       icon: <TipsAndUpdatesOutlinedIcon />,
//       color: '#4caf50'
//     },
//     { 
//       label: 'תלמידות', 
//       path: '/Student', 
//       icon: <LocalLibraryOutlinedIcon />,
//       color: '#3f51b5'
//     },
//     { 
//       label: 'מרצות', 
//       path: '/Speaker', 
//       icon: <SpeakerNotesOutlinedIcon />,
//       color: '#ff9800'
//     },
//     { 
//       label: 'ארכיון', 
//       path: '/Archieve', 
//       icon: <AutorenewOutlinedIcon />,
//       color: '#e91e63'
//     }
//   ];

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const navTo = (path) => {
//     nav(path);
//     setDrawerOpen(false);
//   };

//   const renderMobileDrawer = () => (
//     <Drawer
//       anchor="right"
//       open={drawerOpen}
//       onClose={toggleDrawer(false)}
//       className="app-drawer"
//     >
//       <Box className="drawer-header">
//         <Typography variant="h6" className="drawer-title">תפריט ניווט</Typography>
//         <IconButton onClick={toggleDrawer(false)} className="drawer-close">
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <Divider />
//       <List className="drawer-list">
//         {menuItems.map((item, index) => (
//           <ListItem 
//             button 
//             key={index} 
//             onClick={() => navTo(item.path)}
//             className={`drawer-list-item ${isActive(item.path) ? 'active' : ''}`}
//             style={{
//               '--highlight-color': item.color
//             }}
//           >
//             <ListItemIcon className="drawer-item-icon" style={{ color: isActive(item.path) ? item.color : 'inherit' }}>
//               {item.icon}
//             </ListItemIcon>
//             <ListItemText primary={item.label} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }} className="appbar-container">
//       <AppBar position="static" className="main-appbar" elevation={3}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters className="appbar-toolbar">
//             {isMobile ? (
//               <>
//                 <Typography variant="h6" component="div" className="app-logo">
//                   <HomeOutlinedIcon className="home-icon" />
//                   <span className="logo-text">מערכת ניהול</span>
//                 </Typography>
//                 <IconButton
//                   size="large"
//                   edge="start"
//                   color="inherit"
//                   aria-label="menu"
//                   onClick={toggleDrawer(true)}
//                   className="menu-button"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 {renderMobileDrawer()}
//               </>
//             ) : (
//               <>
//                 <Typography variant="h6" component="div" className="app-logo">
//                   <HomeOutlinedIcon className="home-icon" />
//                   <span className="logo-text">מערכת ניהול</span>
//                 </Typography>
//                 <Box className="nav-buttons">
//                   {menuItems.map((item, index) => (
//                     <Tooltip 
//                       key={index} 
//                       title={item.label} 
//                       placement="bottom" 
//                       arrow
//                       enterDelay={500}
//                     >
//                       <Button
//                         className={`nav-button ${isActive(item.path) ? 'active' : ''}`}
//                         onClick={() => navTo(item.path)}
//                         style={{
//                           '--highlight-color': item.color
//                         }}
//                       >
//                         <span className="button-icon">{item.icon}</span>
//                         <span className="button-text">{item.label}</span>
//                       </Button>
//                     </Tooltip>
//                   ))}
//                 </Box>
//               </>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Tooltip,
  Menu,
  MenuItem,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import './MyAppBar.css';

export default function MyAppBar() {
  const nav = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  
  const menuItems = [
    {
      label: 'קורסים',
      path: '/Course',
      icon: <TipsAndUpdatesOutlinedIcon />,
      color: '#4caf50'
    },
    {
      label: 'תלמידות',
      path: '/Student',
      icon: <LocalLibraryOutlinedIcon />,
      color: '#3f51b5'
    },
    {
      label: 'מרצות',
      path: '/Speaker',
      icon: <SpeakerNotesOutlinedIcon />,
      color: '#ff9800'
    },
    {
      label: 'ארכיון',
      path: '/Archieve',
      icon: <AutorenewOutlinedIcon />,
      color: '#e91e63'
    }
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navTo = (path) => {
    nav(path);
    setDrawerOpen(false);
  };

  const renderMobileDrawer = () => (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      className="app-drawer"
    >
      <Box className="drawer-header">
        <Typography variant="h6" className="drawer-title">תפריט ניווט</Typography>
        <IconButton onClick={toggleDrawer(false)} className="drawer-close">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List className="drawer-list">
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navTo(item.path)}
            className={`drawer-list-item ${isActive(item.path) ? 'active' : ''}`}
            style={{
              '--highlight-color': item.color
            }}
          >
            <ListItemIcon className="drawer-item-icon" style={{ color: isActive(item.path) ? item.color : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="appbar-container">
      <AppBar 
        position="fixed" // שינוי מ-static ל-fixed
        className="main-appbar" 
        elevation={3}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters className="appbar-toolbar">
            {isMobile ? (
              <>
                <Typography variant="h6" component="div" className="app-logo">
                  <HomeOutlinedIcon className="home-icon" />
                  <span className="logo-text">מערכת ניהול</span>
                </Typography>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  className="menu-button"
                >
                  <MenuIcon />
                </IconButton>
                {renderMobileDrawer()}
              </>
            ) : (
              <>
                <Typography variant="h6" component="div" className="app-logo">
                  <HomeOutlinedIcon className="home-icon" />
                  <span className="logo-text">מערכת ניהול</span>
                </Typography>
                <Box className="nav-buttons">
                  {menuItems.map((item, index) => (
                    <Tooltip
                      key={index}
                      title={item.label}
                      placement="bottom"
                      arrow
                      enterDelay={500}
                    >
                      <Button
                        className={`nav-button ${isActive(item.path) ? 'active' : ''}`}
                        onClick={() => navTo(item.path)}
                        style={{
                          '--highlight-color': item.color
                        }}
                      >
                        <span className="button-icon">{item.icon}</span>
                        <span className="button-text">{item.label}</span>
                      </Button>
                    </Tooltip>
                  ))}
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* הוספת אלמנט ריק בגובה הסרגל כדי למנוע הסתרת תוכן */}
      <Toolbar />
    </Box>
  );
}
