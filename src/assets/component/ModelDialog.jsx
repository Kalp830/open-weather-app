import React from "react";

const ModelDialog = ({ open, handleCloseDialog }) => {
  return (
    <>
      <div
        className={`modal fade ${open ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: open ? "rgba(0,0,0,0.5)" : "transparent" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseDialog}
              ></button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quia ullam, pariatur enim deleniti officia, optio
              facilis perspiciatis culpa corrupti veritatis dolorum expedita
              impedit minima ab! Illo eligendi necessitatibus nam.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseDialog}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelDialog;
