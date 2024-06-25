
const TeamMemberCard = ({name, designation, country,src})=>{
    return (
        <div className="TeamMemberCard w-32">
            <div className="MemberImgCtr">
                <img  className="MemberImg rounded-full" src={src}/>
            </div>
            <div className="TeamDiv text-center">
                <div className="MemberName font-bold">{name}</div>
                <div className="MemberDesignation text-xs">{designation}</div>
                <div className="MemberCountry fonr-semibold">{country}</div>
            </div>
        </div>
    )
}

export default TeamMemberCard;