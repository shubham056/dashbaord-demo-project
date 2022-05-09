import React from 'react'

export default function Header({ heading }) {
  return (
    <header className="tophdr">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="pagetitle">
              <h2>{(heading !== undefined)? heading : null}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="userimg text-right">
              <ul>
                <li className="frame1" />
                <li className="frame"><a href="/"><span className="round" /> John Mathew</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}
