import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataById } from '../../firebase/firestore';
import { IStudent, MyCollection } from '../../types/types';
import './style.scss';

export const DetailsStudent: React.FC = React.memo((): JSX.Element => {
  const { id } = useParams();
  const [use, setUse] = useState<IStudent>({} as IStudent);

  useEffect(() => {
    if (id) 
      getDataById<IStudent>(MyCollection.STUDENTS, id).then((res) => {
        console.log(res);
        setUse(res);
      });
    
  }, [id]);

  return (
    <div className="studentdetails">
      <h1>Student Details</h1>

      <h3>{use.name}</h3>
      <h3>{use.surname}</h3>
      <h3>{use.age}</h3>
      <h3>{use.skills}</h3>
      <h3>{use.email}</h3>
      <h3>{use.group_id}</h3>
    </div>
  );

});
