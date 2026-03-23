export interface Question {
  questionNumber: number;
  reference: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const questions: Question[] = [
  {
    questionNumber: 1,
    reference: "BAFS600C2Ch2-1",
    text: "What are the advantages of carrying out a market research before launching a new product/service?\n\n(1) have a better understanding of the market on the whole\n(2) identify target customers\n(3) know what customers need and want",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. By carrying out a market research, a company knows whether there are similar products and there is a keen competition in the market. (2) and (3) are correct. Through market research, a company can understand the tastes and preferences of their target groups of customers. This can be used to estimate the popularity and reputation of the products launched."
  },
  {
    questionNumber: 2,
    reference: "BAFS600C2Ch2-2",
    text: "Which of the following are the tasks performed by a human resources manager?\n\n(1) provide training to employees\n(2) forecast the demand for and supply of labour\n(3) evaluate the performance of workers",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Good human resources management can ensure that the employees are equipped with necessary skills, knowledge and aptitudes to perform their job duties. (2) is correct. Human resources managers have to assess the labour market and the business environment to plan for the workforce needed for the organisation in the future. (3) is correct. Human resources managers need to assess the performance of employees in order to adjust the appraisal system and help them find means to improve their performance."
  },
  {
    questionNumber: 3,
    reference: "BAFS600C2Ch2-3",
    text: "Which of the following are the advantages brought by good human resources management?\n\n(1) reduce employees' turnover rate\n(2) improve the skills, knowledge and aptitudes of employees\n(3) enhance the company's image",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Good human resources management can establish a fair and effective compensation and promotion system. This motivates workers to perform better and enhances their loyalty to the company. Thus, staff turnover rate can be reduced, and the company can retain a stable workforce. (2) is correct. Employees will be provided with training which can improve their skills. (3) is correct. A company with good human resources management observes labour regulations and handles grievances from employees well. This helps maintain a better relationship with trade unions, improving the company's image."
  },
  {
    questionNumber: 4,
    reference: "BAFS600C2Ch2-4",
    text: "Which of the following are the tasks performed by the financial manager of a manufacturing company?\n\n(1) assess the proposal of purchasing a factory\n(2) monitor employees' monthly payroll\n(3) raise funds for the extension of factory",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. A financial manager needs to determine the optimal sales growth rate and assess different investment proposals like the acquisition of a factory. (2) is correct. A financial manager is responsible for working capital management, which includes the cash outflows like employees’ monthly salaries. (3) is correct as a financial manager has to decide the way to raise funds to finance the investment decision."
  },
  {
    questionNumber: 5,
    reference: "BAFS600C2Ch2-5",
    text: "Which of the following are the examples of debt financing?\n\n(1) borrowing from banks\n(2) issuing shares to existing shareholders\n(3) receiving trade credits from suppliers",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. Debt financing refers to obtaining funds from outsiders, such as suppliers and bank institutions, by means of acquiring loans payable in the future. (2) is incorrect. Issuing shares to existing shareholders is an example of equity financing, in which funds are supplied by the owners of the firm."
  },
  {
    questionNumber: 6,
    reference: "BAFS600C2Ch2-6",
    text: "Which of the following tasks is NOT performed by an operations manager?",
    options: {
      A: "overseeing the operation systems and production processes",
      B: "product’s quality control",
      C: "inventory management",
      D: "acquiring funds to support the company’s operations"
    },
    answer: "D",
    explanation: "Acquiring funds to support the company’s operations should be the task of financial managers."
  },
  {
    questionNumber: 7,
    reference: "BAFS600C2Ch2-7",
    text: "Which of the following are the reasons for the existence of financial management?\n\n(1) better utilise resources of the company\n(2) maximise company's wealth\n(3) develop a fair and competitive compensation system for employees",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. Ratio analysis can reveal the company’s ability to fully utilise its assets and capital to generate profit, i.e. profitability. Thus, it acts as a tool to help the company utilise the resources more efficiently. (2) is correct. Financial management includes investment appraisals which help maximise the company’s value and wealth. (3) is incorrect. It is the human resources management that is responsible for developing a fair and competitive compensation system for employees, not financial management."
  },
  {
    questionNumber: 8,
    reference: "BAFS600C2Ch2-8",
    text: "Which of the following is/are the function(s) of human resources planning?\n\n(1) ensure that the company has the right number and kinds of workers\n(2) select the most appropriate candidates for jobs\n(3) develop workers with high motivation to work",
    options: {
      A: "(1) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. Human resources planning is also known as manpower planning. It ensures that a company has the right number and kinds of workers with the ability to complete tasks. (2) is incorrect. Selecting the most appropriate candidates is the function performed in recruitment and selection. (3) is incorrect. Enhancing employees’ motivation is done through training and development."
  },
  {
    questionNumber: 9,
    reference: "BAFS600C2Ch2-9",
    text: "Which of the following statements about operations management are correct?\n\n(1) Inventory management helps ensure that stocks and materials are in good condition.\n(2) Quality assurance system ensures the quality of the firms’ products and services.\n(3) A good quality management system enables a firm to produce goods at a low cost.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Inventory management helps a firm keep an eye on all the materials and supplies, and ensures the good conditions of goods. (2) is correct. Quality assurance allows a firm to produce high quality goods and services. Tasks of operations management include checking the production tools regularly, purchasing quality raw materials from suppliers and ensuring that products of the same quality. This system ensures that the products and services provided by the company are of high quality. (3) is correct. Quality management system comprises inventory management and quality assurance. This system enables a firm to produce products at a lower cost but of a higher quality than its competitors."
  },
  {
    questionNumber: 10,
    reference: "BAFS600C2Ch2-10",
    text: "Which of the following is/are the contribution(s) of operations management to the firm?\n\n(1) design an efficient and effective production process\n(2) manage the existing inventories\n(3) employ workers for carrying out the production",
    options: {
      A: "(1) only",
      B: "(1) and (2) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. The operation manager of a company has the responsibility to design an effective production process to ensure that the production of the company is carried out efficiently and effectively. (2) is correct. The operation manager of a firm is responsible for the inventory management system. He/She handles the inventories of the firm and ensures that they are in good conditions. (3) is incorrect. This task is performed by the human resources manager who is responsible for employing workers."
  },
  {
    questionNumber: 11,
    reference: "BAFS600C2Ch2-11",
    text: "Which of the following are the duties of operations management?\n\n(1) develop the layout of the facilities\n(2) ensure the quality of the products\n(3) provide training to workers",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Operations management is responsible for designing an effective production process by planning the layout of the facilities to utilise all spaces and resources effectively. It is also responsible for ensuring the high quality and good conditions of products. (3) is incorrect. Providing training to workers should be the duty of human resources management because it is responsible for improving workers’ performance and capability."
  },
  {
    questionNumber: 12,
    reference: "BAFS600C2Ch2-12",
    text: "Which of the following is NOT included in the traditional marketing mix (4P)?",
    options: {
      A: "place",
      B: "product",
      C: "people",
      D: "promotion"
    },
    answer: "C",
    explanation: "Marketing mix includes product, price, place and promotion. “People” is not one of them."
  },
  {
    questionNumber: 13,
    reference: "BAFS600C2Ch2-13",
    text: "Which of the following traditional marketing mix (4P) refers to the distribution channel of products from producers to customers?",
    options: {
      A: "price",
      B: "place",
      C: "product",
      D: "promotion"
    },
    answer: "B",
    explanation: "Place concerns distribution decisions like the choices on distribution channel, warehouse location, inventory level and transportation. A is incorrect. Price is about pricing decisions like pricing strategies, discounts, price discrimination and bundling. C is incorrect. Product refers to the design, function and style of the products. D is incorrect. Promotion concerns the strategies adopted by the company to attract buyers to buy its products or services."
  },
  {
    questionNumber: 14,
    reference: "BAFS600C2Ch2-14",
    text: "The marketing department is responsible for __________.\n\n(1) sourcing event sponsorship\n(2) conducting surveys on customer needs\n(3) paying commission to salespersons",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "C",
    explanation: "(1) is correct. When it comes to the promotion of products, the marketing department organises promotion events to intensify the publicity of products. It is thus responsible for sourcing event sponsorship. (2) is correct. The marketing department needs to identify the customer’s needs before implementing any marketing strategies. It therefore conducts surveys in order to understand customers’ needs. (3) is incorrect. Paying commission to salespeople should be done by the financial department of the company, not the marketing department."
  },
  {
    questionNumber: 15,
    reference: "BAFS600C2Ch2-15",
    text: "An IT company wants to bid for the right to operate a store in an IT exhibition in the Wan Chai Exhibition Centre. However, it decides not to submit a tender because the board of directors fears that the company may suffer a loss from the exhibition. Which of the following risk management strategies is adopted?",
    options: {
      A: "risk transfer",
      B: "risk reduction",
      C: "risk avoidance",
      D: "risk assumption"
    },
    answer: "C",
    explanation: "Risk avoidance is adopted. It is because the board of directors of the IT company chooses not to engage in the exhibition in order to prevent any loss. This entirely eliminates the risk of loss."
  },
  {
    questionNumber: 16,
    reference: "BAFS600C2Ch2-16",
    text: "Which of the following is/are the task(s) performed by information management?\n\n(1) managing the storage of information in computer database\n(2) conducting questionnaire surveys to find out customer tastes and preferences\n(3) providing training to employees on the topic of Internet intrusion",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is correct. Information management is responsible for gathering, analysing and storing all information related to decision-making of the company. It assists the managers of the firm to make decisions through providing analysed information. (2) is incorrect. Conducting questionnaires on customer needs and preferences is performed by the marketing department instead of information management. (3) is incorrect. Providing training to employees should be performed by human resources management instead of information management."
  },
  {
    questionNumber: 17,
    reference: "BAFS600C2Ch2-17",
    text: "Arrange the following steps for the risk management process in correct order.\n\n(1) identify the potential loss\n(2) implement measures to control risks\n(3) compare different methods to control and compensate the loss\n(4) monitor the usefulness of certain measures",
    options: {
      A: "(1) (3) (4) (2)",
      B: "(1) (4) (3) (2)",
      C: "(1) (3) (2) (4)",
      D: "(1) (2) (3) (4)"
    },
    answer: "C",
    explanation: "The steps for the process should be: (1) identify the potential loss (3) compare different methods to control and compensate the loss (2) implement measures to control risks (4) monitor the usefulness of certain measures."
  },
  {
    questionNumber: 18,
    reference: "BAFS600C2Ch2-18",
    text: "To avoid goods from being stolen, a supermarket installs closed-circuit television (CCTV). Which of the following risk management strategies is adopted by the supermarket?",
    options: {
      A: "risk assumption",
      B: "risk reduction",
      C: "risk avoidance",
      D: "risk transfer"
    },
    answer: "B",
    explanation: "Installing closed-circuit television can help prevent people from stealing and thus reduce the loss suffered by the supermarket due to thefts. Therefore, it is a method of risk reduction to control risks. A is incorrect. Risk assumption means that the company bears the risk of loss. C is incorrect. Installing closed-circuit television does not eliminate thefts. D is incorrect. In this case, the risk of loss was not transferred to another party."
  },
  {
    questionNumber: 19,
    reference: "BAFS600C2Ch2-19",
    text: "Recently, the customer base of Mr Chui’s company was stolen. However, he had taken an insurance policy and the insurance company will compensate for the losses. Which of the following risk strategies did he use?",
    options: {
      A: "risk transfer",
      B: "risk reduction",
      C: "risk avoidance",
      D: "risk assumption"
    },
    answer: "A",
    explanation: "Taking out insurance is regarded as risk transfer. The risk of loss is transferred to another party, which is the insurance company in this case."
  },
  {
    questionNumber: 20,
    reference: "BAFS600C2Ch2-20",
    text: "A good ________ system motivates workers to work productively and attracts competent workers.",
    options: {
      A: "recruitment and selection",
      B: "training and development",
      C: "performance appraisal",
      D: "compensation"
    },
    answer: "D",
    explanation: "A good compensation system provides employees with a fair remuneration. This can motivate them to work productively and attracts better, more competent workers to join the company."
  },
  {
    questionNumber: 21,
    reference: "BAFS600C2Ch2-21",
    text: "Which of the following types of the business functions are helpful when a company determines the salary level of an employee?\n\n(1) human resources management\n(2) financial management\n(3) information management",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1) is correct. Human resources management is responsible for keeping track of the performance of employees through running an appraisal system. Evaluations to the employees can be useful for deciding the wage levels and bonuses given to them. (2) is correct. Financial management is responsible for keeping track of the salary expenditure for employees so as to ensure that they are maintained at a level which is acceptable to the company. (3) is correct. Information management provides information about the market wage level to the human resources management, which is responsible for deciding a reasonable salary for the employees."
  },
  {
    questionNumber: 22,
    reference: "BAFS600C2Ch2-22",
    text: "Which of the following descriptions about human resources management is/are correct?\n\n(1) It helps attract and retain capable workers.\n(2) It conducts performance appraisal to evaluate the working performance of workers.\n(3) It sets up labour unions to strive for employees’ welfare and benefits.",
    options: {
      A: "(2) only",
      B: "(1) and (2) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is correct. Human resources management has a function of attracting and retaining a suitable amount of workers with suitable skills to complete tasks. (2) is correct. Conducting performance appraisal is one of the tasks performed by human resources management. (3) is incorrect. Labour unions are set up by workers but not the human resources management."
  },
  {
    questionNumber: 23,
    reference: "BAFS600C2Ch2-23",
    text: "Jenny is the human resources manager of High High Ltd, which provides interior design services. Which of the following tasks are performed by Jenny?\n\n(1) manpower planning\n(2) designing workshops for the workers to learn a new computer programme\n(3) arranging workflow for the employees",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. As a human resources manager, Jenny carries out manpower planning to ensure that the company has the right kind and number of workers. She is also responsible for providing training, like workshops of a new computer programme, for workers to improve their capability and performance. (3) is incorrect. Arranging workflow for the employees is a task done by operations management but not human resources management. Operation management is responsible for designing an effective production process and a facility layout."
  },
  {
    questionNumber: 24,
    reference: "BAFS600C2Ch2-24",
    text: "Which of the following is NOT the role of human resources management in a company?",
    options: {
      A: "develop a fair compensation system for the employees",
      B: "recruit an adequate number of workers",
      C: "obtain funds to pay for salary of the workers",
      D: "observe labour regulations"
    },
    answer: "C",
    explanation: "Obtaining fund to pay for the wages of the employees is a task done by financial managers. Human resources manager only assesses the wage level of the workers. A, B and D are correct. They are the importance of human resources management to the company. Human resources management ensures efficiency and effectiveness of the use of manpower to achieve a company’s goal. It has to develop a fair compensation system to employees, recruit employees to work for the firm and ensure that the company has obeyed all labour regulations."
  },
  {
    questionNumber: 25,
    reference: "BAFS600C2Ch2-25",
    text: "A financial manager is responsible for __________.\n\n(1) maximising a company’s wealth\n(2) controlling the resources used for production\n(3) assessing investment projects and their profitability",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. A financial manager develops financial plans which forecast a company’s future financial needs. The plans aim to maximise the company’s wealth through utilisation of resources. Investment projects will be assessed by the financial manager as well. (2) is incorrect. Controlling the resources for production should be done by operations management."
  },
  {
    questionNumber: 26,
    reference: "BAFS600C2Ch2-26",
    text: "Which of the following are the functions performed by information management of a company?\n\n(1) retrieve past sales figures to evaluate the company’s performance\n(2) establish a computer network within the company\n(3) control the expenses of the company",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Information management involves the establishment of an information system within the company. It also reports the information of sales figures to the manager. (3) is incorrect. It is the financial management that is responsible for controlling the expenses of the company, but not the information management. Information management may only be responsible for recording the information of the expenses."
  },
  {
    questionNumber: 27,
    reference: "BAFS600C2Ch2-27",
    text: "A good production layout design can __________.\n\n(1) enhance workers’ productivity\n(2) reduce potential dangers\n(3) lower production costs",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1), (2) and (3) are correct. A layout design is the physical arrangement of resources used to produce goods and services. When a layout is well designed, it helps increase workers’ productivity, reduce hazards and lower the costs of material handling."
  },
  {
    questionNumber: 28,
    reference: "BAFS600C2Ch2-28",
    text: "Which of the following are functions of marketing management?\n\n(1) seize market opportunities to explore new markets\n(2) execute marketing plans to compete with other firms\n(3) determine the types and quantities of products to be sold to customers",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1), (2) and (3) are correct. Marketing management is the business function to plan and carry out marketing strategies to help a firm accomplish its goals. With the use of marketing mix, it decides the product price and executes marketing plans to compete with other competitors in the market. The management will also find out the customers’ preferences and hence set out ways to satisfy their needs."
  },
  {
    questionNumber: 29,
    reference: "BAFS600C2Ch2-29",
    text: "Which of the following are decided by marketing managers?\n\n(1) designs of the products\n(2) prices of the products\n(3) production capacity of the production lines",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) and (2) are correct. Marketing managers have to make decisions on details of marketing plans, such as pricing policy, product design, packaging, branding and so on. (3) is incorrect. Production capacity is decided by operations managers. Marketing managers only look for the demand for products, which is useful for operations managers to make decisions regarding the production lines."
  },
  {
    questionNumber: 30,
    reference: "BAFS600C2Ch2-30",
    text: "Which of the following descriptions about marketing management is/are correct?\n\n(1) A marketing manager is responsible for hiring salespersons for promotion.\n(2) A marketing department sets prices for the products to be sold.\n(3) In the marketing mix, ‘place’ refers to the choice of location of production.",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "B",
    explanation: "(1) is incorrect. It is the human resources management that is responsible for hiring salespersons for promotion. (2) is correct. A marketing department sets prices for the products to be sold. (3) is incorrect. Place refers to how the company makes the product or service available to buyers, not the location of production."
  },
  {
    questionNumber: 31,
    reference: "BAFS600C2Ch2-31",
    text: "Which of the following is NOT the task of information management to the company?",
    options: {
      A: "use information to assess the risks involved in the company’s operation",
      B: "collect information inside and outside the company",
      C: "transform raw data into information",
      D: "provide dependable and timely information to managers for decision-making"
    },
    answer: "A",
    explanation: "Risks are related to risk management. This business function identifies various kinds of risks faced by the firm and develops plans to deal with these risks. Information management is not responsible for that. B, C and D are incorrect. They are the tasks of information management. It helps to collect both internal and external data for the firm. It conducts analysis on raw data collected and transforms them into information, so as to facilitate the decision-making process."
  },
  {
    questionNumber: 32,
    reference: "BAFS600C2Ch2-32",
    text: "Katherine is the CEO of the Kings Company. She is making the future plan by analysing the market trend report and the sales report. Which of the following types of the business functions are useful when Katherine is making such a plan?\n\n(1) information management\n(2) human resources management\n(3) marketing management",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. They are the business functions needed to be performed. Information management is responsible for providing the sales report to Katherine. Marketing management provides the information of the market trend, which assists the decision-making process, like determining the types of products to be produced. (2) is incorrect. Human resources management cannot provide relevant information to Katherine."
  },
  {
    questionNumber: 33,
    reference: "BAFS600C2Ch2-33",
    text: "Danny is planning a new advertising campaign for his company. He has to obtain a bank loan to finance the project and hire workers for the promotion day. Which of the following types of business functions need to be performed when Danny is carrying out such a campaign?\n\n(1) financial management\n(2) information management\n(3) human resources management",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. Financial management obtains funds to finance this new advertising campaign. Human resources management hires workers to perform tasks in the new campaign. (2) is incorrect. We cannot conclude that the information management has assisted the firm in the above case."
  },
  {
    questionNumber: 34,
    reference: "BAFS600C2Ch2-34",
    text: "In a firm, information management assists the human resources department in several ways. Which of the following are the possible ways?\n\n(1) collecting and storing personnel information\n(2) developing an attendance taking system\n(3) facilitating staff placement",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "D",
    explanation: "(1), (2) and (3) correct. Information management stores the personnel information for human resources management. It has a system to record the attendance of the staff. It also records the personal information of staff members like their qualifications. This facilitates staff placement by identifying the kind of workers suitable for the placement and their wage rates in the market."
  },
  {
    questionNumber: 35,
    reference: "BAFS600C2Ch2-35",
    text: "Which of the following descriptions about risk management is INCORRECT?",
    options: {
      A: "A firm uses risk assumption when there are no other ways to deal with the risks.",
      B: "Every company faces the risk of loss due to uncontrolled incidents.",
      C: "Risk management assists a company to estimate and identify its exposure to different types of risks only.",
      D: "Risk avoidance is the most appropriate way to deal with risks that can lead to significant loss."
    },
    answer: "C",
    explanation: "Risk management does not only assist a company to identify its potential dangers in daily operations, but also implements measures to control these risks. A is correct. When there are no other ways to deal with the risks, risk assumption is the only way to manage the risks. B is correct. All companies face risks, since there are always uncontrolled incidents. D is correct. When there is a risk of significant loss, it is better for a company to avoid the risks."
  },
  {
    questionNumber: 36,
    reference: "BAFS600C2Ch2-36",
    text: "Which of the following are the performance indicators of a marketing department?\n\n(1) market share\n(2) staff turnover rate\n(3) sales volume",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) and (3) are correct. A marketing department is responsible for implementing marketing strategies to generate sales and revenues by selling goods and services. Besides, it also has to maintain the company’s competitiveness by competing with others. In this regard, market share and sales volume are significant performance indicators which can evaluate the performance of the department. (2) is incorrect. Staff turnover rate should be the performance indicator of human resources management because it is responsible for retaining competent workers and maintaining an efficient workforce in the company."
  },
  {
    questionNumber: 37,
    reference: "BAFS600C2Ch2-37",
    text: "Which of the following is/are the purpose(s) of controlling in the marketing department?\n\n(1) ensure that the company achieves its planned marketing objectives\n(2) turn the marketing plan into action\n(3) monitor changes in market needs and respond to changes",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is correct. The aim of controlling in a department is to ensure that the activities are carried out in a goal-driven way. (2) and (3) are incorrect. Monitoring changes in market needs and responding to changes are not a part of controlling because the performance standards (objectives) have already been set. Changes in market needs should not affect the standards (objectives) set. Controlling only focuses on whether the actual performance of the activities meets the performance standards."
  },
  {
    questionNumber: 38,
    reference: "BAFS600C2Ch2-38",
    text: "Which of the following is correct about regular fire drills in the company?",
    options: {
      A: "It is a strategy of risk avoidance.",
      B: "It is a strategy of risk reduction.",
      C: "It is a strategy of risk assumption.",
      D: "It is a strategy of risk transfer."
    },
    answer: "B",
    explanation: "Fire drills help employees know well how to escape from fire. This minimises possible injuries or deaths from fire. Thus, this is a form of risk reduction."
  },
  {
    questionNumber: 39,
    reference: "BAFS600C2Ch2-39",
    text: "Which of the following is/are correct when it comes to risk management strategies?\n\n(1) not engaging in transactions with notorious companies to avoid risks\n(2) setting up fire escapes and fire alarms to reduce risks\n(3) asking an insurance company to insure against possible misfortunes in department offices in war-ridden countries",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "C",
    explanation: "(1) is correct. Doing so can avoid the damage or reputation of the business. (2) is correct. This highly minimises possible injuries or deaths from fire as fire alarms send people an alert promptly when there is a fire, and fire escapes provide people with safe routes out of the fire. (3) is incorrect. Insurance companies do not insure possible loss originated from wars as the loss is predictable to be too huge to cover."
  },
  {
    questionNumber: 40,
    reference: "BAFS600C2Ch2-40",
    text: "Which of the following is/are the responsible area(s) of the financial manager?\n\n(1) employing the accountants and financial planners\n(2) setting an optimal inventory level\n(3) determining the possible losses that may occur to the company",
    options: {
      A: "(2) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(2) and (3) only"
    },
    answer: "A",
    explanation: "(1) is incorrect. Staff recruitment and candidate selection are done by the human resources management. (2) is correct. Setting an optimal inventory level is a part of working capital management and it is a job duty of the financial manager. (3) is incorrect. Determining possible losses is a part of risk management. Risk management helps estimate the possibility of the occurrence of losses and the possible impacts."
  },
  {
    questionNumber: 41,
    reference: "BAFS600C2Ch2-41",
    text: "Which of the following is NOT in the planning process of a marketing department?\n\n(1) evaluating market strengths and weaknesses\n(2) establishing the goals for marketing campaigns\n(3) adjusting marketing targets",
    options: {
      A: "(1) only",
      B: "(3) only",
      C: "(1) and (3) only",
      D: "(1), (2) and (3)"
    },
    answer: "B",
    explanation: "(1) is incorrect. Evaluating market strengths and weaknesses should be the first step in the planning process. It is for forecasting the future and understanding existing problems. (2) is incorrect. Goal setting is a major part of the planning process. (3) is correct. Adjusting marketing targets is a remedial action, which is a part of the business function of controlling."
  },
  {
    questionNumber: 42,
    reference: "BAFS600C2Ch2-42",
    text: "Which of the following is/are the correct match(es) of a department manager and his/her area of responsibility?\n\n(1) Department manager: operations manager; Area of responsibility: factory layout design\n(2) Department manager: human resources manager; Area of responsibility: organising workflow\n(3) Department manager: financial manager; Area of responsibility: capacity planning",
    options: {
      A: "(1) only",
      B: "(3) only",
      C: "(1) and (2) only",
      D: "(1), (2) and (3)"
    },
    answer: "A",
    explanation: "(1) is correct. Operations department is responsible for layout design of plants to make the operation efficient. (2) is incorrect. Organising workflow is the responsibility of the operations department. They are responsible for organising the flow of production. (3) is incorrect. Capacity planning is done by the operations department as well. It means planning the output quantity to meet demands and utilise resources efficiently."
  },
  {
    questionNumber: 43,
    reference: "BAFS600C2Ch2-43",
    text: "Which of the following is NOT a function of the marketing management of a boutique?",
    options: {
      A: "set the price of a certain product",
      B: "decide the location of a new outlet",
      C: "pay bonuses to salespeople",
      D: "project the demand for the products using the sales trend"
    },
    answer: "C",
    explanation: "Marketing management is responsible for 4Ps, including price, place, product and promotion. Price means setting the price while place means deciding the location of the shop. Thus, A and B are incorrect. D is incorrect. It is the job of marketing management to project demand in order to know that whether the products will be well received by customers. C is correct. Paying bonuses to salespeople is the job of financial management."
  },
  {
    questionNumber: 44,
    reference: "BAFS600C2Ch2-44",
    text: "ABC Hotel, a hotel in Hong Kong, decides to expand the hotel to serve the Mainland tourists. Which of the following is NOT the role of the human resources manager in the expansion?",
    options: {
      A: "acquire workers who are able to speak Mandarin fluently",
      B: "provide Mandarin courses to existing workers",
      C: "raise enough funds to acquire high quality workers",
      D: "provide reasonable compensation to the newly acquired workers"
    },
    answer: "C",
    explanation: "Raising funds is the job of financial managers. A, B and D are correct. They are the roles of human resources manager. The human resources manager is responsible for recruiting capable workers, providing training for workers and providing fair compensations to workers in order to motivate them."
  },
  {
    questionNumber: 45,
    reference: "BAFS600C2Ch2-45",
    text: "Jerry is the operations manager of a factory manufacturing trainers. He recently received a number of complaints from customers about the poor quality of its products. Which of the following is a method that he CANNOT adopt to deal with the problem?",
    options: {
      A: "ensure a reasonable stock level to avoid wear and tear from over-storage",
      B: "redesign the products to reinforce the quality",
      C: "set standards to ensure that trainers produced are of high quality",
      D: "provide after-sales services to customers affected"
    },
    answer: "D",
    explanation: "D is incorrect as it is the job of the marketing manager. A, B and C are correct. All of them are parts of the job of the operations manager."
  }
];
