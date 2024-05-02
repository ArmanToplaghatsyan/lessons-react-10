import React, { useEffect, useState } from 'react';
import './style.scss';
import { useParams } from 'react-router-dom';
import { IGroup, MyCollection } from '../../types/types';
import { getDataById } from '../../firebase/firestore';

export const GroupDetails: React.FC = React.memo((): JSX.Element => {
  const { id } = useParams();
  const [use, setUse] = useState<IGroup>({} as IGroup);

  useEffect(() => {
    if (id) 
      getDataById<IGroup>(MyCollection.GROUPS, id).then((res) => {
        console.log(res);
        setUse(res);
      });
    
  }, [id]);

  return (
    <div className="groupdetails">
      <h1>Teacher Details</h1>

      <h3>{use.name}</h3>
      <h3>{use.teacher_id}</h3>
      <h3>{use.count}</h3>
    </div>
  );
});

