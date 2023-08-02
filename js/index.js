document.addEventListener('DOMContentLoaded', () => {
    let skills = [
        "Wireframing", 
        "Prototyping", 
        "Hand-coding HTML 4.0", 
        "Hand-coding XHTML transitional and strict", 
        "Some HTML 5",
        "Hand-Coding CSS 2.0 and 1.0",
        "Familiarity with CSS Grid and Flexbox",
        "W3C Source-Code Validation",
        "Some JavaScript",
        "Basic Debugging",
        "Basic DOM (Document Object Model) Manipulation",
        "Intermediate ActionScript",
        "Introductory Skills in Version Control with Git",
        "Introductory Skills in Git Usage from the CLI, with GitBash",
        "Introductory Skills in Integration of Git with and GitHub",
        "Quality Testing Website Projects",
        "Exposure to User Research and Testing",
        "Section 508 Accessibility Compliance",
        "Cross-Browser Compatibility",
        "Exposure to C# at a Beginner’s Level",
        "Exposure to Python at a Beginner’s Level",
        "Exposure to Java at a Beginner’s Level",
        "Basic Familiarity with JDBC",
        "Exposure to PHP Server-Side Scripting at a Beginner’s Level",
        "Exposure to MySQL database, MariaDB, phpMyAdmin, HeidiSQL, WAMP and LAMP (Linux, Apache, MySQL and PHP)",
        "Intermediate Knowledge of Cross-Platform SQL",
        "Introductory Skills in Using Microsoft Visual Studio (VS) Code",
        "Strong Familiarity with Development Platforms and Code Editors such as CodePen, Replit and Notepad++; as well as with Integrated Development Environments (IDEs) Such as PyCharm,  and IntelliJ IDEA",
        "Familiarity with the Windows CLIs (MSDOS and PowerShell), and with the Linux terminal, as well as some knowledge of commands for use within them",
        "Experience with Changing Ink Toner on Inkjets and Cartridge in Laser Printers, Printer Alignment and Calibration",
        "Experience Embedding Video and Audio",
        "Windows XP, 7 and 10 Workstation Administration and Some Maintenance",
        "Setting Up OS Installations for Dual-Booting or for Use Withing Oracle Virtual Machine (VM)",
        "Performing Basic Computer Troubleshooting and Maintenance on Workstations",
        "Organizational Abilities",
        "Problem Solving Abilities",
        "Service Orientations",
        "Growth Mindset", 
        "Desire to Learn and Aptitude for Acquiring Technical Skills",
        "Microsoft Office 365, 2010, 2013 and 2016 Usage",
        "Knowledge of Many Computer Applications that Run on Windows, Mac and Linux",
        "Reasonable Knowledge of Cybersecurity Measures for Preventing and Remediating System Intrusion and Infections",
        "Scheduling with Microsoft Outlook Calendar and Gmail Calendar",
        "Near-native and Highly Fluent English",
        "Bi-Lingual Communication in English and Portuguese",
        "Beginning Level Spanish",
        "Effective Written and Verbal Communication Skills",
        "Documentation Writing", 
        "Developing Personas for Use Cases", 
        "Technical Writing for Information Architecture"
    ];
    let skillsSection = document.getElementById('skills');
    let skillsList = skillsSection.querySelector('ul');
    
    for (let i=0; i < skills.length; i++) {
        let skill = document.createElement('li');
        let skillWrapperDiv = document.createElement('div');
        skill.innerText = `${skills[i]}`;
        skillWrapperDiv.appendChild(skill);
        skillsList.appendChild(skillWrapperDiv);
    }
    
    let today = new Date();
    var thisYear = today.getFullYear();
    let footer = document.querySelector('footer');
    let copyright = document.createElement('p');
    copyright.innerHTML = `&copy; Nataly Mota ${thisYear}`;
    footer.appendChild(copyright);
});