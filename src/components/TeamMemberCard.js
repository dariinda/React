
const TeamMemberCard = ({name, designation, country,src})=>{
    return (
        <div className="TeamMemberCard">
            <div className="MemberImgCtr">
                <img  className="MemberImg" src={src}/>
            </div>
            <div className="TeamDiv">
                <div className="MemberName">{name}</div>
                <div className="MemberDesignation">{designation}</div>
                <div className="MemberCountry">{country}</div>
            </div>
        </div>
    )
}

export default TeamMemberCard;