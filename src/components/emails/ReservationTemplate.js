import * as React from "react";

export default function ReservationTemplate({ data }) {
  const email = {
    backgroundColor: "#FFF",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const email_wrapper = {
    padding: "1rem 1.5rem",
  };

  const content = {
    margin: "0.65rem 0",
  };

  const pg_title = {
    fontSize: "18px",
    color: "#494646",
    marginBottom: "0.8rem",
  };
  const rs_title = {
    color: "#494646",
    fontSize: "15px",
    fontWeight: "700",
    padding: "10px 0",
  };
  const rs_content = {
    color: "#494646",
  };

  const fl = {
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    gap: "5rem",
  };

  const divider = {
    padding: "0.05rem",
    backgroundColor: "#49464650",
    margin: "1rem 0",
  };
  return (
    <div style={email}>
      <div style={email_wrapper}>
        <h1>Enkapune Cowboy Park</h1>
        <div style={divider}></div>
        <h1 style={pg_title}>Reservation request</h1>
        <div style={content}>
          <h3 style={rs_title}>Guest name:</h3>
          <p style={rs_content}>{data.fullname}</p>
        </div>

        <div style={content}>
          <h3 style={rs_title}>Guest phone:</h3>
          <p style={rs_content}>{data.phone}</p>
        </div>

        <div style={content}>
          <h3 style={rs_title}>Guest email:</h3>
          <p style={rs_content}>{data.email}</p>
        </div>
        <div style={fl}>
          <div style={content}>
            <h3 style={rs_title}>Check in:</h3>
            <p style={rs_content}>{data.checkIn}</p>
          </div>

          <div style={content}>
            <h3 style={rs_title}>Check out:</h3>
            <p style={rs_content}>{data.checkOut}</p>
          </div>
        </div>
        <div style={fl}>
          <div style={content}>
            <h3 style={rs_title}>Room Type:</h3>
            <p style={rs_content}>{data.roomType}</p>
          </div>

          <div style={content}>
            <h3 style={rs_title}>Room Package:</h3>
            <p style={rs_content}>{data.package}</p>
          </div>
        </div>

        <div style={content}>
          <h3 style={rs_title}>Total guest:</h3>
          <div style={fl}>
            <div>
              <p style={rs_content}>Adults</p>
              <p style={rs_content}>{data.adults}</p>
            </div>
            <div>
              <p style={rs_content}>Children</p>
              <p style={rs_content}>{data.children}</p>
            </div>
          </div>
        </div>

        <div style={content}>
          <h3 style={rs_title}>Total rooms:</h3>
          <p style={rs_content}>Not applicable</p>
        </div>

        <div style={content}>
          <h3 style={rs_title}>Requested pickup:</h3>
          <p style={rs_content}>{data.pickup ? "Yes" : "No"}</p>
        </div>
        <div style={divider}></div>
      </div>
    </div>
  );
}
