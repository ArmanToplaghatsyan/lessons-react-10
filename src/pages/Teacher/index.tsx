import React, { useEffect, useState } from 'react';
import './style.scss';
import { deleteDataById, getData } from '../../firebase/firestore';
import { ITeacher, MyCollection } from '../../types/types';
import { Link } from 'react-router-dom';

export const Teachers: React.FC = React.memo((): JSX.Element => {
  const [teacher, setTeacher] = useState<ITeacher[]>([]);

  useEffect(() => {
    getData<ITeacher>(MyCollection.TEACHERS)
      .then((res) => {
        console.log(res);
        setTeacher(res);
      })
      .catch(console.warn);
  }, []);

  console.log(teacher);

  return (
    <div className="teachers">
      <div className="h1">
        <h1>Teachers</h1>
      </div>
      {teacher.map((elm) => {
        return (
          <div key={elm.id}>
           
              <p>{elm.name}</p>
              <p>{elm.surname}</p>
              {/* <p>--- {elm.email}</p> */}
              <button
                onClick={() =>
                  deleteDataById(MyCollection.TEACHERS, elm.id)
                    .then((res) =>  getData<ITeacher>(MyCollection.TEACHERS)
                    .then((res) => {
                      console.log(res);
                      setTeacher(res);
                    })
                    .catch(console.warn))
                    .catch(console.warn)
                }
              >
                &times;
              </button>
              <br />
              <Link to={'/detailsteacher/' + elm.id}>See more</Link>
            </div>
        );
      })}
    </div>
  );
});
