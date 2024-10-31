function Hello(){
  let myName = "John";
  let age = 25;
  let fullName = () => {
    return "John Doe";
  }

  return <p>
    I am {myName} and my full name is {fullName()}
    <br />
    my age is {age}
  </p>
}

export default Hello;