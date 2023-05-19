
const Profile = () => {

    const localUser = localStorage.getItem('userName')

  return (
    <div>
        {localUser.name}
    </div>
  )
}

export default Profile