import { Avatar } from '@mui/material';
import React from 'react';
import pic from '../../components/assets/images/Testimonial 1.jpg';
import './dialog.css';

const Dialog = ({ data, setShowUser }) => {
    const { participant } = data;
    return (
        <div className={data.showUser ? 'dialog-container dialog-active' : 'dialog-container'}>
            <div className='dialog-content'>
                <div className='dialog-header'>
                    <Avatar alt={`${participant?.name}`} src={pic} sx={{ width: 56, height: 56, marginBottom: '10px' }} />
                    <span className='close-btn' onClick={() => setShowUser({ participant: {}, showUser: false })}>✖️</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px",margin:"10px" }}>
                    <h4 className='participant-name'>{participant?.name}</h4>
                    <p><span style={{ color: "orangered" }}>Total Price: </span>{participant?.totalprice}</p>
                    <p><span style={{ color: "orangered" }}>Total Points : </span> {participant?.totalpoints}</p>
                </div>
                <div className='dialog-data daily-table'>
                    <p>Daily</p>
                    <table className='data-table'>
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Points</th>
                                <th>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rs {participant?.daily?.price}</td>
                                <td>{participant?.daily?.points}</td>
                                <td>{participant?.daily?.rank}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='dialog-data weekly-table'>
                    <p>Weekly</p>
                    <table className='data-table'>
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Points</th>
                                <th>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rs {participant?.weekly?.price}</td>
                                <td>{participant?.weekly?.points}</td>
                                <td>{participant?.weekly?.rank}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='dialog-data monthly-table'>
                    <p>Monthly</p>
                    <table className='data-table'>
                        <thead>
                            <tr>
                                <th>Price</th>
                                <th>Points</th>
                                <th>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rs {participant?.monthly?.price}</td>
                                <td>{participant?.monthly?.points}</td>
                                <td>{participant?.monthly?.rank}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dialog;
