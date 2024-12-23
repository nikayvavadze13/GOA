const emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" },
    { subject: "სხვა თემა", content: "ეს არის დამატებითი ინფორმაცია", receivedDate: "2024-12-09" },
  ];
  
  const subjectFilter = document.getElementById("subject-filter");
  const emailList = document.getElementById("email-list");
  
  function filterEmails() {
    emailList.innerHTML = "";
    const selectedSubject = subjectFilter.value;
  
    for (const email of emails) {
      if (selectedSubject === "all" || email.subject === selectedSubject) {
        const li = document.createElement("li");
        li.textContent = `${email.subject}: ${email.content} (${email.receivedDate})`;
        emailList.appendChild(li);
      }
    }
  }
  
  subjectFilter.addEventListener("change", filterEmails);
  filterEmails();
  