import React from 'react'

const MobileNavbar = ({ show, onClose }) => {

  return (
    <div className={`mobileItemsContainer ${show && "show-drawer"}`}>
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
      ></button>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar
