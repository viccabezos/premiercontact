import './contact.css'

const name = "Barto";
const avatar ="https://placekitten.com/g/200/300";
const status = true;
const statusText = status ? "online" : "offline";
const statusIndicator = status ? "status-online" : "status-offline";

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="test" />
      <h3 className="name">{name}</h3>
      <div className="status">
        <p className="status-text">{statusText}</p>
        <div className={statusIndicator}></div>
      </div>
    </div>
  );
}

export default Contact;
