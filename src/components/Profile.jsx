//challange
function Profile()
{
    return(
        <div>
<ProfileCard  
 name="khafsa"
    age={22}
    greeting={
        <div>hello,youre doing great job</div>
    }>
  
    <p>hobbies:Gardening,reading,riding</p>
    <button>Contact</button>
</ProfileCard>
<ProfileCard  
 name="khan"
    age={22}
    greeting={
        <div>hello,youre doing wawooo!!</div>
    }>
  
    <p>hobbies:Gardening,reading,hicking</p>
    <button>Contact</button>
</ProfileCard>
        </div>
    )
}
export default Profile;
function ProfileCard(props) {
    return(
        <>
        <h1>Name:{props.name}</h1>
     <h2>age:{props.age}</h2>
     <h3>Greeting:{props.greeting}</h3>
     <div>{props.children}</div>
     </>
    
     )
}