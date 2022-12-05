import { getSession, signOut } from 'next-auth/react';
import { useRouter } from "next/router";



function User({ user, data }) {

    const router = useRouter();

    function redirected() {
        router.push('/transections')
    }

    return (
        <>
            <header className='user-heading'>
                <center>
                    <h2>Welcome to HomePage</h2>
                </center>

            </header>
            <div className='user-details'>
                <h2>User Details</h2>
                <p className='user-detail'>
                    <h4>Address : </h4><p> {user.address}</p>
                </p>
                <p className='user-detail'>
                    <h4>Profile ID : </h4> <p>{user.profileId}</p>
                </p>
                <p className='user-detail'>
                    <h4>Signature : </h4> <p>{user.signature}</p>
                </p>

                <button onClick={() => signOut({ redirect: '/signin' })}> Sign out </button>
            </div >

            {
                data.map((currEle) => {
                    return (
                        <div className="donations-container">
                            <div key={currEle.id} className="donations">

                                <div className="donation-heading">
                                    <img src={currEle.image} width="300" height="300"></img>
                                    <h2>NFT NUMBER - {currEle.userId}</h2>
                                    <h3>{currEle.title}</h3>
                                    < div className='donation-btn'>
                                        <button onClick={redirected}> Make Donation Here </button>
                                    </div >
                                </div>
                                <div className="descriptionBody">
                                    <div className="donationDesc">
                                        <p>{currEle.body}</p>
                                    </div>
                                </div>




                            </div>

                        </div>

                    );
                })
            }

        </>
    );
}



export async function getServerSideProps(context) {
    const session = await getSession(context);

    const res = await fetch("https://ankit009-git.github.io/restapi/data.json");
    const data = await res.json();

    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: session.user,
            data: data,
        },
    };
}

export default User;




