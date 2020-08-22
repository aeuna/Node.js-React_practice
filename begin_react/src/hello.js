import React from 'react';

const Hello = ({ color, name, isSpecial }) => {
  console.log(name);
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}안녕하세요 {name}
    </div>
  );
};

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
