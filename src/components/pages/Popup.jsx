import React from "react";
import Modal from "react-modal";

const Popup = ({ isOpen, onClose, comments }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Comments Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1000,
        },
        content: {
          maxWidth: "400px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          position: "relative",
        },
      }}
    >
      <h2>Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {comment}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments available.</p>
      )}
      <button className="btn btn-primary" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default Popup;
