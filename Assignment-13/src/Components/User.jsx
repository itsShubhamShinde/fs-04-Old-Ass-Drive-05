import { useState } from "react";
import './Style/Users.css'

const User = () => {
    const [user, setUser] = useState([])
    const getUser = () => {
        fetch("https://randomuser.me/api/?results=20")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUser(data.results)

            })
    }
    const removeuser = () => {
        setUser([])
    }
    return (
        <div style={{padding:"20px"}}>
            <div className="mainContainer">
                <div>
                    <h1>User Details</h1>
                </div>
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo consectetur, eaque aut, illum consequatur architecto incidunt voluptatibus corporis facilis quas porro, vero numquam iure ratione maiores est ducimus accusamus tempore necessitatibus et. In eaque natus expedita vero consequatur eligendi tempore voluptate assumenda nisi, adipisci animi id sit ducimus minus, laboriosam aperiam rem a eos numquam? Velit voluptatibus cumque, est reprehenderit rerum exercitationem eius accusantium quidem hic, dolores dignissimos, deserunt minus. Suscipit, consequatur tenetur. Ipsa, officia. Tenetur nobis temporibus voluptatem ullam. Quibusdam animi atque quisquam quam itaque accusamus modi nisi nulla dicta excepturi laborum temporibus harum, aliquam dignissimos? Facilis culpa, placeat rerum pariatur ipsam eligendi reiciendis corporis dolorum sequi ut necessitatibus nam repellendus nesciunt, nemo architecto quasi voluptates totam a sapiente iure praesentium optio dolorem quo? Illum quibusdam aliquid ea accusantium perferendis quisquam magnam odit saepe qui quae rem possimus quos, doloribus voluptates, totam sed minima explicabo fugiat dicta nisi!
                    </p>
                </div>
                <br />
                <button style={{ padding: ".5rem 1rem", borderRadius: "5px", backgroundColor: "black", color: "white" }} onClick={getUser}>User Data</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{ padding: ".5rem 1rem", borderRadius: "5px", backgroundColor: "black", color: "white" }} onClick={removeuser}>Remove</button>
            </div>
            <div className='tablediv'>
                {user.length === 0 ? null : <table className='tablediv' width={1500} cellPadding={5} >
                    <thead >
                        <tr>
                            <td style={{  fontWeight: "600" }}>Image</td>
                            <td style={{  fontWeight: "600" }}>Name</td>
                            <td style={{  fontWeight: "600" }}>User Name</td>
                            <td style={{  fontWeight: "600" }}>Gender</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user.map((e) => (
                                <tr>
                                    <img width={100} height={100} src={e.picture.large} alt="" />
                                    <td>{e.name.first}</td>
                                    <td>{e.email}</td>
                                    <td>{e.gender}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>}
            </div>
        </div>
    )
}
export default User;