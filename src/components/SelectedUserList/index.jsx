import React from 'react';

const SelectedUserList = (props) => {
  const { users } = props;
  const selectedUserList = users.filter((u) => u.isSelected);

  return (
    <div>
      {selectedUserList.map(({ firstName, lastName }) => {
        <span>
          {firstName} {lastName},
       </span>
      })}
    </div>
  )
}

export default SelectedUserList;