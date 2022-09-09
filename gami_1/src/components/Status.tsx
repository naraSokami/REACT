import { FC } from "react";
import "./Status.css"

interface StatusProps {
    name: string
    role: string
    money: number
}


const Status : FC<StatusProps> = ({ name, role, money }) : any => {
    return ( 
        <div className="status">
            <h1>Status</h1>
            <div className="status-body">
                <img src={"img/defaultUser.jpg"} alt="" ></img>
                <div className="stats">
                    <p className="name">
                        name: <span>{name}</span>
                    </p>
                    <p className="class">
                        class: <span>{role}</span>
                    </p>
                    <p className="xp">
                        xp: <span>value</span>
                    </p>
                    <p className="money">
                        money: <span>{money}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Status;