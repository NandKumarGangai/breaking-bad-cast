import React from 'react';

export default function Casts(props = {}) {
    const {
        cast: {
            nickname = '',
            img = '',
            name = '',
            portrayed = '',
            birthday = '',
            status = ''
        } = {}
    } = props;
    return (
        <div className="card">
            <img src={img} alt='bg' />
            <div className="content">
                <h2 className="title">
                    {nickname}
                </h2>
                <div className="copy">
                    <p>
                        <strong>
                            {name}
                        </strong>
                    </p>
                    <hr />
                    <p>
                        <strong>
                            {'Actor name: '}
                        </strong>
                        {portrayed}
                    </p>
                    <p>
                        <strong>
                            {'DOB: '}
                        </strong>
                        { birthday }
                    </p>
                    <p>
                        <strong>
                            {'Status: '}
                        </strong>
                        { status }
                    </p>
                </div>
            </div>
        </div>
    )
}
