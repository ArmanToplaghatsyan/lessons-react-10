import React, { useEffect, useState } from 'react';
import './style.scss';
import { IGroup, MyCollection } from '../../types/types';
import { deleteDataById, getData } from '../../firebase/firestore';
import { Link } from 'react-router-dom';

export const Groups: React.FC = React.memo((): JSX.Element => {
  const [group, setgroup] = useState<IGroup[]>([]);

  useEffect(() => {
    getData<IGroup>(MyCollection.GROUPS)
      .then((res) => {
        console.log(res);
        setgroup(res);
      })
      .catch(console.warn);
  }, []);

  console.log(group);

  return (
    <div className="groups">
      <div className="h1">
        <h1>Groups</h1>
      </div>
      {group.map((elm) => {
        return (
          <div key={elm.id}>
            <p>{elm.name}</p>
            <p>{elm.teacher_id}</p>
            <button
              onClick={() =>
                deleteDataById(MyCollection.GROUPS, elm.id)
                  .then((res) =>
                    getData<IGroup>(MyCollection.GROUPS)
                      .then((res) => {
                        console.log(res);
                        setgroup(res);
                      })
                      .catch(console.warn),
                  )
                  .catch(console.warn)
              }
            >
              &times;
            </button>
            <br />
            <Link to={'/detailsgroup/' + elm.id}>See more</Link>
          </div>
        );
      })}
    </div>
  );
});
