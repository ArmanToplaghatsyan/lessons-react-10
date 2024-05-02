import React, { useEffect, useState } from 'react';
import './style.scss';
import { IStudent, MyCollection } from '../../types/types';
import { deleteDataById, getData } from '../../firebase/firestore';
import { Link } from 'react-router-dom';

export const Students: React.FC = React.memo((): JSX.Element => {
  const [stud, setStud] = useState<IStudent[]>([]);

  useEffect(() => {
    getData<IStudent>(MyCollection.STUDENTS)
      .then((res) => console.log(res))
      .catch(console.warn);
  }, []);

  return (
    <div className="students">
      <h1>Students</h1>

      {stud.map((elm) => {
        return (
          <div key={elm.id}>
            <p>{elm.name}</p>
            <p>{elm.surname}</p>
            <button
                onClick={() =>
                  deleteDataById(MyCollection.TEACHERS, elm.id)
                    .then((res) =>  getData<IStudent>(MyCollection.STUDENTS)
                    .then((res) => {
                      console.log(res);
                      setStud(res);
                    })
                    .catch(console.warn))
                }
              >
                &times;
              </button>
              <Link to={'/detailsstudent/'+elm.id}>See More</Link>
          </div>
        );
      })}
    </div>
  );
});
