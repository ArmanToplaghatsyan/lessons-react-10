import React, { useState, useEffect } from 'react';
import './style.scss';
import { useParams } from 'react-router-dom';
import { ITeacher, MyCollection } from '../../types/types';
import { getDataById } from '../../firebase/firestore';

export const TeacherDetails: React.FC = React.memo((): JSX.Element => {
  const { id } = useParams();
  const [use, setUse] = useState<ITeacher>({} as ITeacher);

  useEffect(() => {
    if (id) 
      getDataById<ITeacher>(MyCollection.TEACHERS, id).then((res) => {
        console.log(res);
        setUse(res);
      });
    
  }, [id]);

  return (
    <div className="teacherdetails">
      <h1>Teacher Details</h1>

      <h3>{use.name}</h3>
      <h3>{use.surname}</h3>
      <h3>{use.email}</h3>
    </div>
  );
});
