import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { MyError } from '../pages/MyError';
import { Groups } from '../pages/Groups';
import { Teachers } from '../pages/Teacher';
import { Students } from '../pages/Studnets';
import { AddTeacher } from '../pages/AddTeacher';
import { AddGroup } from '../pages/AddGroup/indexc';
import { AddStudent } from '../pages/AddStudent';
import { TeacherDetails } from '../pages/TeacherDetails';
import { DetailsStudent } from '../pages/DetailsStudent';
import { GroupDetails } from '../pages/GroupDetails';

export const MyRouter = React.memo(() => {
  const router = useRoutes([
    { 
        path: '/', 
        element: <Layout />, 
        children:[
            {path:"", element:<Groups/>},
            {path:"teachers", element:<Teachers/>},
            {path:"students", element:<Students/>},
            {path:"addteacher", element:<AddTeacher/>},
            {path:"addGroup", element:<AddGroup/>},
            {path:"addstudents", element:<AddStudent/>},
            {path:"detailsgroup/:id", element:<GroupDetails/>},
            {path:"detailsteacher/:id", element:<TeacherDetails/>},
            {path:"detailsstudent/:id", element:<DetailsStudent/>},

            
        ]
    },{
        path: '*',
        element:<MyError/>
    }]);

  return router;
});
