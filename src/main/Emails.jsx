import { useState } from "react";

import Email from "./Email.jsx";
import EmailContent from "./EmailContent.jsx";

export default function Emails(props) {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    // Fold the open mail if already selected
    if (selectedEmail === email) {
        setSelectedEmail(null)
    // Open the mail if null is selected
    } else {
      props.setEmails([])
      setSelectedEmail(email)
      console.log("clicked on <li> email dom element")
    }
  }

  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            initialEmails={props.initialEmails}
            onClick={() => handleEmailClick(email)}/>
        ))}
      </ul>
      {selectedEmail && <EmailContent 
                          email={selectedEmail}
                          setSelectedEmail={setSelectedEmail}
                          setEmails={props.setEmails}
                          initialEmails={props.initialEmails}/>
                          }
    </main>
  );
}
