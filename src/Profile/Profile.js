import React from 'react'
import  propTypes from 'prop-types'

 const Profile  = ({fullName,bio,profession,children,handleMessage}) => {
  return (
    <div className='all'>
   {children}
   <div className='texte'> 
<h2>{fullName}  </h2>
<h2>{bio}  </h2>
<h2>{profession}  </h2>
</div>
<button className='b' onClick={()=>handleMessage(fullName)} >Show Name</button>
    </div>
  )
 
}
Profile.propTypes= {
  fullName : propTypes.string,
  bio : propTypes.string,
  profession : propTypes.string

}
export default Profile

Profile.defaultProps={
  fullName:'Name', bio: 'texte bio', profession: 'profession'
};


