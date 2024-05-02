import React, { useEffect, useState } from 'react';
import './style.scss';
import { IStudent, MyCollection } from '../../types/types';
import { deleteDataById, getData } from '../../firebase/firestore';
import { Link } from 'react-router-dom';

export const Students: React.FC = React.memo((): JSX.Element => {
  const [stud, setStud] = useState<IStudent[]>([]);
  const [showSearch, setShowSearch] = useState<any>([])

  useEffect(() => {
    getData<IStudent>(MyCollection.STUDENTS)
      .then((res) => {
        console.log(res);
        setStud(res)
      })
      .catch(console.warn);
  }, []);

  const handleChange =(text: string) => {
  
    setShowSearch(stud.filter((elm) => elm.name.includes(text) ))

    // setStud(stud.filter((elm) => elm.name.includes(text) ))
  }
  return (
    <div className="students">
      <h1>Students</h1>
      <input type="text" onChange={(e) => handleChange(e.target.value)} placeholder="search..."/>
      { showSearch.length === 0 && stud.map((elm) => {
        return (
          <div key={elm.id}>
            <p>{elm.name}</p>
            <p>{elm.surname}</p>
            <button
              onClick={() =>
                deleteDataById(MyCollection.TEACHERS, elm.id)
                  .then((res) => getData<IStudent>(MyCollection.STUDENTS)
                    .then((res) => {
                      console.log(res);
                      setStud(res);
                    })
                    .catch(console.warn))
              }
            >
              &times;
            </button>
            <Link to={'/detailsstudent/' + elm.id}>See More</Link>
          </div>
        );
      })}
        { showSearch.length > 0 && showSearch.map((elm: any) => {
        return (
          <div key={elm.id}>
            <p>{elm.name}</p>
            <p>{elm.surname}</p>
            <button
              onClick={() =>
                deleteDataById(MyCollection.TEACHERS, elm.id)
                  .then((res) => getData<IStudent>(MyCollection.STUDENTS)
                    .then((res) => {
                      console.log(res);
                      setStud(res);
                    })
                    .catch(console.warn))
              }
            >
              &times;
            </button>
            <Link to={'/detailsstudent/' + elm.id}>See More</Link>
          </div>
        );
      })}

    </div>
  );
});
