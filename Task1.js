

    const persons = [
      {
        firstName: "Kiran",
        lastName: "Ghimire",
        dob: "2001-11-11",
      },
      {
        firstName: "Nitesh",
        lastName: "Upadhyaya",
        dob: "1997-11-01",
      },

      {
        firstName: "Bibin",
        lastName: "Maharjan",
        dob: "1996-02-02",
      },
      {
        firstName: "Kushal",
        lastName: "Bajracharya",
        dob: "1998-10-26",
      },
      {
        firstName: "Amresh",
        lastName: "Thakur",
        dob: "1997-03-11",
      },
    ];



    function calculateAge(date) {

      const startDate = new Date(date + " " + '12:00 AM');
      const endDate = new Date();

      const diffDate = new Date(new Date() - startDate);
      

      const yearDiff = diffDate.toISOString().slice(0, 4) - 1970;
      
      const monthDiff = diffDate.getMonth();
      
      const mon = Math.floor(monthDiff * 30);



      const dayDiff = diffDate.getDate() - 1;
      

      const day = mon + dayDiff
     

      let label = '';

      if (yearDiff > 0) {
        label += (yearDiff > 1) ? yearDiff + ' years, ' : yearDiff + ' year, ';
      }



      if (day > 0) {
        label += (day > 1) ? day + ' days ' : day + ' day ';
      }




      return label;

    }


    

    persons.forEach(data => { console.log(data.firstName, data.lastName, calculateAge(data.dob)) })



 