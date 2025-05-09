function ProfileCard(props){
    return(
        <div> style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}
        <h2>{props.name}さん</h2>
        <p>年齢:{props.age}</p>
        <p>サークル:{props.circle}</p>
        </div>
    );
}

export default ProfileCard;