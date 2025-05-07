// // 


// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { styled, keyframes } from '@mui/material/styles';

// // אנימציות
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const shimmer = keyframes`
//   0% { background-position: -200% 0; }
//   100% { background-position: 200% 0; }
// `;

// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-5px); }
//   100% { transform: translateY(0px); }
// `;

// // מיכל הלוגו
// const LogoContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   cursor: 'pointer',
//   padding: theme.spacing(1.5),
//   borderRadius: '12px',
//   transition: 'all 0.3s ease',
//   animation: `${fadeIn} 0.8s ease-out`,
//   position: 'relative',
//   '&:hover': {
//     transform: 'scale(1.03)',
//     '& .logo-highlight': {
//       width: '100%',
//       opacity: 0.2,
//     },
//     '& .logo-main': {
//       letterSpacing: '1px',
//     },
//     '& .logo-sub': {
//       letterSpacing: '0.5px',
//     }
//   },
// }));

// // אפקט הדגשה
// const LogoHighlight = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   bottom: 0,
//   left: '50%',
//   transform: 'translateX(-50%)',
//   height: '4px',
//   width: '30%',
//   borderRadius: '2px',
//   background: 'linear-gradient(90deg, #FF3366, #FF9933, #FFFF66, #FF9933, #FF3366)',
//   backgroundSize: '400% 100%',
//   animation: `${shimmer} 3s infinite linear`,
//   transition: 'all 0.5s ease',
//   opacity: 0.7,
// }));

// // טקסט ראשי
// const MainText = styled(Typography)(({ theme, size }) => ({
//   fontWeight: 800,
//   fontSize: size ? `${size * 0.25}px` : '2rem',
//   letterSpacing: '0px',
//   background: 'linear-gradient(135deg, #1976d2 0%, #3f51b5 50%, #7e57c2 100%)',
//   backgroundClip: 'text',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   marginBottom: theme.spacing(0.5),
//   position: 'relative',
//   transition: 'all 0.3s ease',
//   textAlign: 'center',
//   animation: `${float} 3s ease-in-out infinite`,
//   textShadow: '0 5px 15px rgba(0,0,0,0.1)',
// }));

// // טקסט משני
// const SubText = styled(Typography)(({ theme, size }) => ({
//   fontWeight: 500,
//   fontSize: size ? `${size * 0.12}px` : '1rem',
//   letterSpacing: '0px',
//   color: theme.palette.text.secondary,
//   transition: 'all 0.3s ease',
//   textAlign: 'center',
//   position: 'relative',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: '-5px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '30px',
//     height: '2px',
//     background: 'linear-gradient(90deg, transparent, #1976d2, transparent)',
//     borderRadius: '1px',
//   }
// }));

// // קומפוננטת הלוגו
// const Logo = ({ size = 100, onClick }) => {
//   return (
//     <LogoContainer onClick={onClick}>
//       <MainText className="logo-main" size={size}>
//         גור
//       </MainText>
//       <SubText className="logo-sub" size={size}>
//         מרכז השתלמויות
//       </SubText>
//       <LogoHighlight className="logo-highlight" />
//     </LogoContainer>
//   );
// };

// export default Logo;





import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// אנימציות
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// מיכל הלוגו - הגדלתי את הפדינג והוספתי מרווח
const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: theme.spacing(2.5), // הגדלת הפדינג
  borderRadius: '16px', // הגדלת הרדיוס
  transition: 'all 0.3s ease',
  animation: `${fadeIn} 0.8s ease-out`,
  position: 'relative',
  margin: theme.spacing(2), // הוספת מרווח מסביב
  '&:hover': {
    transform: 'scale(1.05)', // הגדלת אפקט ההגדלה בהובר
    '& .logo-highlight': {
      width: '100%',
      opacity: 0.3, // הגדלת האטימות
    },
    '& .logo-main': {
      letterSpacing: '1.5px', // הגדלת הריווח באותיות
    },
    '& .logo-sub': {
      letterSpacing: '0.8px', // הגדלת הריווח באותיות
    }
  },
}));

// אפקט הדגשה - שיניתי לצבעים חיוניים יותר
const LogoHighlight = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  height: '6px', // הגדלת הגובה
  width: '40%', // הגדלת הרוחב ההתחלתי
  borderRadius: '3px', // הגדלת הרדיוס
  // צבעים חיוניים יותר
  background: 'linear-gradient(90deg, #FF1744, #FF9100, #FFEA00, #00E676, #00B0FF, #651FFF)',
  backgroundSize: '400% 100%',
  animation: `${shimmer} 3s infinite linear`,
  transition: 'all 0.5s ease',
  opacity: 0.8, // הגדלת האטימות
}));

// טקסט ראשי - שיניתי לצבעים חיוניים יותר והגדלתי
const MainText = styled(Typography)(({ theme, size }) => ({
  fontWeight: 900, // הגדלת המשקל
  fontSize: size ? `${size * 0.35}px` : '3rem', // הגדלת הגופן
  letterSpacing: '0.5px', // הוספת ריווח התחלתי
  // צבעים חיוניים יותר
  background: 'linear-gradient(135deg, #FF1744 0%, #FF9100 40%, #FFEA00 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(1), // הגדלת המרווח התחתון
  position: 'relative',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  animation: `${float} 3s ease-in-out infinite`,
  textShadow: '0 5px 20px rgba(0,0,0,0.15)', // הגדלת הצל
}));

// טקסט משני - שיניתי לצבעים חיוניים יותר והגדלתי
const SubText = styled(Typography)(({ theme, size }) => ({
  fontWeight: 600, // הגדלת המשקל
  fontSize: size ? `${size * 0.16}px` : '1.4rem', // הגדלת הגופן
  letterSpacing: '0.3px', // הוספת ריווח התחלתי
  // צבע חיוני יותר
  color: '#651FFF', // סגול חיוני
  transition: 'all 0.3s ease',
  textAlign: 'center',
  position: 'relative',
  marginTop: theme.spacing(0.5), // הוספת מרווח עליון
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px', // הגדלת המרחק
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50px', // הגדלת הרוחב
    height: '3px', // הגדלת הגובה
    // צבעים חיוניים יותר
    background: 'linear-gradient(90deg, transparent, #00E676, transparent)',
    borderRadius: '1.5px', // הגדלת הרדיוס
  }
}));

// קומפוננטת הלוגו - הגדלתי את ברירת המחדל של הגודל
const Logo = ({ size = 150, onClick }) => { // הגדלת ברירת המחדל מ-100 ל-150
  return (
    <LogoContainer onClick={onClick}>
      <MainText className="logo-main" size={size}>
        גור
      </MainText>
      <SubText className="logo-sub" size={size}>
        מרכז השתלמויות
      </SubText>
      <LogoHighlight className="logo-highlight" />
    </LogoContainer>
  );
};

export default Logo;