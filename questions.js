const questions = [
    {
        "id": "3fe56ca7-d6cf-4089-9990-c3bd320df7b3",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "01074191-6931-4f59-8eaa-08d1e8f84168",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "342434c0-99c0-4365-bd85-b240a5ffbb5e",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "6da31410-a797-4baf-9512-b473b9395240",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "1ac2181f-6a42-4ed3-896a-dc4dfcbb0181",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "abbbd156-7797-4955-ab91-f8e2e7de3930",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Stack",
            "Queue",
            "Linked List",
            "Heap"
        ],
        "answer": "Queue"
    },
    {
        "id": "287ba159-8108-448a-b82b-edcc972780fa",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Heap",
            "Linked List",
            "Queue",
            "Stack"
        ],
        "answer": "Heap"
    },
    {
        "id": "13c59d42-ff26-46c3-a6a5-869fd2c3639d",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Linked List",
            "Queue",
            "Stack"
        ],
        "answer": "Linked List"
    },
    {
        "id": "15a37ed2-6a43-4d0e-a60c-8fd14985ba54",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "239b6fb3-de56-4c08-ac47-59a00a164ece",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "8a84d73a-6e7f-4ab3-aee8-39238a74e85d",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "076a2a1e-d902-43c1-bfc5-9634014ba9c1",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Priority Scheduling",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "30a6c9b9-10e6-4ce1-ad74-e71b5b9cf238",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "b3a9be39-82be-487a-bbc9-72044479eb73",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "9f5c3015-7f3f-4b71-b82d-9986f68a8a67",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Ensure security",
            "Schedule processes",
            "Handle I/O",
            "Manage memory"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "fed50114-e63b-43b9-b960-441c10f7740f",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Schedule processes",
            "Ensure security"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "84c962b0-ab8b-4a5c-a3ee-fcff9dcb84fa",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "20",
            "18",
            "24"
        ],
        "answer": "32"
    },
    {
        "id": "62b9aab3-926e-4cb2-8cf2-ae31decb9d05",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "32",
            "9",
            "18"
        ],
        "answer": "9"
    },
    {
        "id": "dc3db8bc-a39e-4411-a5d5-9ec1ab401d72",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "32",
            "18",
            "24"
        ],
        "answer": "50"
    },
    {
        "id": "aafd8891-20b2-47e5-aea2-87489e3b0005",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "18",
            "24",
            "80"
        ],
        "answer": "80"
    },
    {
        "id": "5fd43ec2-101f-4f2c-89b0-e177a664b6ff",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "f9c3c05c-2f1e-49a2-9700-586c4d4b3ade",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "6 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "d6324a7f-726c-4f62-8e26-49d4a69eab03",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "258633da-5d04-4f3a-a854-c99474287412",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "c5f11c34-9cec-4854-9f2b-e392862f6289",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "968d4579-1e4c-40d1-9435-33eba74a2bfe",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "2a6fb9aa-b644-4ba8-9b34-75ba3bc899d9",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Late",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "393aef81-da78-48ce-93fc-94a346e0b918",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "04911fec-2264-408e-802a-282e27633294",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "DELETE",
            "UPDATE",
            "INSERT",
            "SELECT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "5a1469f4-7204-45bc-b1bc-1b38de69d6a7",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "DELETE",
            "INSERT",
            "UPDATE",
            "SELECT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "9af0cd4d-b242-4e34-ba28-5d6e9b5a6bb7",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "cb425094-2085-4c36-99ce-a3f43b56f819",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "d2d74689-d342-4d5f-b0e6-2f1830601af0",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "ea113acd-3cce-4d4b-9ff3-2885ef1d6bd4",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Consistency"
    },
    {
        "id": "265c9757-51e2-4316-9b0e-7d2b47094d7e",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Isolation"
    },
    {
        "id": "fb8d2726-176a-4625-b601-9702301eb22f",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Durability",
            "Atomicity"
        ],
        "answer": "Durability"
    },
    {
        "id": "b95b9818-adcc-4237-a68c-6631203665cc",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "ba82062f-36b7-4ae0-a75a-22fb9b19e643",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "4ae527c5-1fb5-4396-97f1-67ba4bf5787f",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "8cc4ba86-7b35-4bf3-9172-109761acb601",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "cb115db2-a196-4c44-a0cf-6ccec9d4c00f",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Stack",
            "Heap",
            "Linked List",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "5952db4e-aa77-4c6b-8dbf-43a6e5538983",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Linked List",
            "Queue",
            "Stack",
            "Heap"
        ],
        "answer": "Queue"
    },
    {
        "id": "3f2a9acf-fd1c-4687-9b7d-98e52e91dab2",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Stack",
            "Heap",
            "Linked List",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "648a6294-9dd5-41cc-ad44-f1b85a84aca9",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Stack",
            "Linked List",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "ef1118f3-85a1-4d2e-ada6-2921b53c1095",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "2364ed2f-1536-4a1c-af72-9fb926196339",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "c1627ff0-c35c-40ce-af98-8d82079af917",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "37294612-20be-4eeb-b7f7-489cc210f7cb",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "645086e2-1445-4cc8-98db-83cd0a69f106",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "2e280dca-6861-4c35-b89b-690fca461bbb",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Handle I/O",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "496c7b37-db26-4eaa-b3da-1028a1e10a6b",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "f8e9d86f-886c-4afc-bc37-321165241eb7",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "2160f4c2-ff95-4026-85cb-a3e6f0df975f",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "20",
            "32",
            "24",
            "18"
        ],
        "answer": "32"
    },
    {
        "id": "543dfd5a-4545-4a20-98ac-e7297d8c5e6f",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "18",
            "9",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "f9b5b80e-1b4b-46b4-9938-bdcba1c1971b",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "32",
            "24",
            "18",
            "50"
        ],
        "answer": "50"
    },
    {
        "id": "4eb3e4dc-b8c9-4695-9213-fdaa4baccceb",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "18",
            "24",
            "32"
        ],
        "answer": "80"
    },
    {
        "id": "36ad5bfa-3ae7-424a-b00b-5bdcca06ea8d",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "35149ca4-11a4-4543-be5d-fa7bbe2e831e",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "8dba3ffe-b90b-4a35-8dda-ea051c19ae04",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "6039b78c-0e6a-4a13-80df-1ced5b8273f1",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "485cd9ec-227b-4b50-ba53-517ca629776d",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "3c414cbb-7c0f-45f1-9197-c1466e90794c",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "1582041e-25ed-4527-aa52-9612334a28b0",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "e195b10b-6b4e-4f87-b3c1-476531427be6",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "e989eecb-f88a-409f-90f1-4614d3cf86e6",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "DELETE",
            "UPDATE",
            "SELECT",
            "INSERT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "60bb9ec6-9dbd-4d38-baa5-971b93a6f530",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "UPDATE",
            "DELETE",
            "INSERT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "075dadfd-9204-4822-8f29-ff08fac702f2",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "DELETE",
            "SELECT",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "99896ff4-9c5b-4d0d-9589-d86360c8debc",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "UPDATE",
            "SELECT",
            "DELETE",
            "INSERT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "6fc97551-4f05-4477-8dc8-1eb6f4b2f17f",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Durability",
            "Consistency"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "bd30d4b3-3a14-40bb-b340-8c6223a3ea16",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "0b0ea856-5674-4876-b633-c64e9e6a0d18",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "0ab090f1-d78f-4d1c-b08c-97cab9b8551a",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Consistency",
            "Atomicity",
            "Durability",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "707f2b0e-1847-43fe-8113-b3ab734575af",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(log n)",
            "O(n log n)",
            "O(n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "f00010c3-e09e-4c4b-ab57-3c1017082d70",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "8c8abe26-0368-4ae3-89f8-f66c683310f2",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "3f9ac3ca-c373-4f25-a8f0-58de1af2aeaf",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "a57b4735-418c-4457-a9a1-bc2bcdc18b7a",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Heap",
            "Queue",
            "Stack",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "b9af38e3-87a5-431a-9cca-79fc177e2095",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Linked List",
            "Stack",
            "Queue"
        ],
        "answer": "Queue"
    },
    {
        "id": "1defc598-cf68-4ade-9d7b-a68363eefae8",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Stack",
            "Linked List",
            "Heap",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "8ae99ea9-6813-463d-9bf7-ae7fc55cb3d9",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Linked List",
            "Stack",
            "Queue",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "65653826-7cfa-4502-81bb-a0f35221bd92",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "796cc05a-7116-4635-84d9-b83c1303292b",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "6799ec61-09fb-4c83-bdac-f7b55bf58019",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "ec68cab9-e8bb-4946-b273-f08e75eaa62e",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "16f7df7d-beaf-463b-9197-9aa1fded38d9",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Handle I/O",
            "Schedule processes",
            "Ensure security",
            "Manage memory"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "cea69a26-6d3a-478b-bf51-d14b95091d23",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "0dab2af5-cda5-4946-b0f3-2a2a85800694",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Schedule processes",
            "Ensure security"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "9124b377-291f-43cb-b4fd-b8672b5274a6",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Ensure security",
            "Schedule processes",
            "Manage memory",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "71d610b6-c090-45f9-8e30-f1df2a53e923",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "24",
            "20",
            "18",
            "32"
        ],
        "answer": "32"
    },
    {
        "id": "2ed5ec66-bbfb-49d1-b778-151ab654218a",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "24",
            "9",
            "18"
        ],
        "answer": "9"
    },
    {
        "id": "3638bc06-1ac8-491d-a84c-b132c6418120",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "18",
            "50",
            "32",
            "24"
        ],
        "answer": "50"
    },
    {
        "id": "d7e41b74-9165-4f69-bcb0-e5abf1c96e20",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "18",
            "24",
            "32",
            "80"
        ],
        "answer": "80"
    },
    {
        "id": "4831b2b7-1595-4fac-a695-262bf3b80c05",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "b79e0afb-d6d7-4ab0-acc7-9528fa270186",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "6f59c835-742a-457a-90bf-b5258abf11c4",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "7da1610f-5008-4bd0-8fb8-7fbefab89cb1",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "3 km/hr",
            "4 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "47684f22-9274-4db0-a3fc-1c34a7d583f7",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Panic",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "3ed9aa83-a006-4203-8c68-59f427be92c2",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Panic",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "e79595a0-1603-4531-b2de-9645da086136",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Disorganized",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "635879b2-26e4-4a0f-9d90-8afa3a6bfe47",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "d717f297-b35e-46be-bc46-5d9246d8e502",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "125f7fb5-7c06-4a74-b0c2-59cf4211b6a2",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "UPDATE",
            "DELETE",
            "INSERT",
            "SELECT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "1f6453c7-37e3-4138-bacf-5c72c85b9826",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "DELETE",
            "SELECT",
            "UPDATE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "0aa3c6ef-7ac6-4ece-9476-f898021cb851",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "UPDATE",
            "DELETE",
            "INSERT",
            "SELECT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "97978553-c1cb-4a71-9793-d7c1f15063ed",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Durability",
            "Consistency",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "a31e85bb-817b-43eb-b7b1-5cb4f91cee9e",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Atomicity",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "75074b56-694e-4396-ad8d-f624112c45e5",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Durability",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "5586ffac-f067-43a1-8074-9856f66cc4e6",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Durability",
            "Isolation",
            "Consistency"
        ],
        "answer": "Durability"
    },
    {
        "id": "acc6081a-65ff-4d35-8a50-42e1c2c930eb",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "912190bb-dbf9-408b-aa9c-f7658ca3244e",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "2d41b439-709f-4140-9fe9-2d4187b58d3b",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "264f836a-df85-4c05-8be3-b630d295b467",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(n log n)",
            "O(n)",
            "O(1)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "1a55bab9-baac-4347-99b5-1f8fedde6179",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Heap",
            "Stack",
            "Linked List",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "4ecf104d-b9d6-4011-a641-b1518a964ead",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Linked List",
            "Queue",
            "Heap",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "a5473ed5-9f23-4916-b8fc-6a44dfd506e2",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Stack",
            "Linked List",
            "Heap",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "4a5a7ebe-e837-472b-856e-9ac087579cc6",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Stack",
            "Queue",
            "Heap",
            "Linked List"
        ],
        "answer": "Linked List"
    },
    {
        "id": "2aa31eff-7105-4469-9a83-f82a16d43878",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "1840e4b3-fa0c-4f68-a293-a65b9ff61b57",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Shortest Job First",
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "b19b6deb-481f-44f9-9397-af9fe7ccc272",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "2fb617e9-52b9-4d1a-be15-0624979653a7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "First Come First Serve",
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "5a3ee15b-34bf-46c6-8f20-08437dc3f17f",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "0115283f-09a0-4b32-89ce-4d1b86a22c38",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "ee2e6cad-419d-47f4-a452-32aca1b2c9b0",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Ensure security",
            "Schedule processes",
            "Manage memory",
            "Handle I/O"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "0540e6be-7358-4faa-aefe-828519cf0c27",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "e3e0b0d0-cfa5-4470-bfa6-e5dff0b697f6",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "18",
            "32",
            "24",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "f33bf659-54b0-4aa5-b21b-e24708116b36",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "18",
            "32",
            "9",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "090395d0-0f59-47b6-a8dc-ce240c17a4c0",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "18",
            "32",
            "50",
            "24"
        ],
        "answer": "50"
    },
    {
        "id": "6718e3ec-1c29-4f2f-9f26-ceb6f4fb0426",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "18",
            "80",
            "32",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "6e231070-6151-4279-a50e-bee0a36cfc17",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "4 km/hr",
            "5 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "78c6494e-6925-40df-a3c6-0473cb249cda",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "3 km/hr",
            "6 km/hr",
            "5 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "2551e544-6d7d-4dfb-9cc2-b08bd282655d",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "edd67cfa-e580-40ca-bfdc-29f9b98d8149",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "67c64c15-6d23-4acf-8026-74551a509e14",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Stay calm and solve",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "763e3b3d-cdd0-4fb6-ac80-32aaa05c01fd",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Ignore",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "126f3b94-a8ea-480b-af66-307b359c4a54",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Late",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "db4a1bea-76de-4438-b0c7-106d950e26e9",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Late",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "c79c6d51-daf5-43aa-83d9-6a79c23428a7",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "c6ce9fa4-8aa2-447d-975e-95ec0d9b9a7f",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "INSERT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "5be34a79-7c47-4115-a0e1-91727a5ee280",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "DELETE",
            "INSERT",
            "SELECT",
            "UPDATE"
        ],
        "answer": "INSERT"
    },
    {
        "id": "37f08e92-bf9d-4dbd-9c79-d33441042b1b",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "SELECT",
            "INSERT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "56b0668b-1208-46bd-894a-d3a386d3e8d1",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Consistency",
            "Atomicity",
            "Durability",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "bc5ac059-3947-448f-8465-53d431a6ae11",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Atomicity",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "5430c77f-57a7-404b-9747-aed3c20d302b",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Atomicity",
            "Isolation",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "b72473af-9466-4986-9265-eaa393646c9d",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "517e99e9-322f-422f-9d2f-d2b95a2ec069",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "6295ec1b-ecd1-4004-b60d-86d9ddf583b1",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "bff6f41d-713d-4bc1-bf8e-1e464a6aaa81",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "3d2c1e14-52c0-493d-8c93-ea9662837fb4",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "d4e16a2f-0a97-46a8-b678-74db8a34833f",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Stack",
            "Queue",
            "Heap",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "423fbacc-4d0f-4412-9f18-615367749861",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Queue",
            "Linked List",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "33786755-672d-47cc-a4d3-d271838b7f26",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Queue",
            "Linked List",
            "Stack",
            "Heap"
        ],
        "answer": "Heap"
    },
    {
        "id": "f6835ae0-c624-483b-9c6b-00b4383bc32f",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Queue",
            "Linked List",
            "Stack"
        ],
        "answer": "Linked List"
    },
    {
        "id": "242ab8d7-1ad9-47be-9907-ba2dd3928bff",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "8c25655e-ce33-446f-b2d7-84f8e0d3d4dc",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "bc86daba-5083-4364-96e0-f0bd42e7b5cb",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "b1538ca9-4bfe-46ae-bb9d-b3fb2aa21c7b",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "ee9eafc1-2f97-4d36-aaf9-a33744440da2",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Ensure security",
            "Manage memory",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "6761f35c-107b-46a8-9b95-69c03c91f0b0",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Schedule processes",
            "Ensure security"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "35adcb67-e2a4-487c-af0f-b4bc129ecbc7",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "bf5cf147-016f-4adf-ab6e-de0f7f983527",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "e9c07228-f927-4004-a22d-d6c147a8afe1",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "20",
            "18",
            "24"
        ],
        "answer": "32"
    },
    {
        "id": "084a377a-0688-424c-a2d4-7d479e4e7007",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "24",
            "18",
            "9"
        ],
        "answer": "9"
    },
    {
        "id": "a3797092-c36a-4217-a0c3-0d6043e7ce00",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "32",
            "24",
            "18",
            "50"
        ],
        "answer": "50"
    },
    {
        "id": "5e87bf94-2503-43d1-8f80-62c9537c4d75",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "32",
            "18",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "a468961f-69aa-4954-9bcb-9adcffdcdf62",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "5 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "7b2214bb-23c2-4851-ad3c-428037aba771",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "6 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "c383e253-dd54-416d-a8be-69fa53573a51",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "3239fc6c-3595-46cb-8903-bd79b9550aae",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "50f76e62-7255-4a1d-a326-cf7c14fae7ae",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Stay calm and solve",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "e2694f7b-e318-449d-a1d3-b31e386812c1",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Panic",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "b872ca0d-2ad7-4fd3-8ee6-9b9534277d9f",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Late",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "98113b84-168e-4bde-81f4-8f6c9c700d6c",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Late",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "8404abb7-36cb-4b6e-9879-7dd0e4e04e22",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "UPDATE",
            "SELECT",
            "INSERT",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "75e76e89-7ecd-4423-8440-ca76b57498e9",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "INSERT",
            "DELETE",
            "SELECT",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "859a40c3-e594-4a20-a3cc-2910646130f1",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "SELECT",
            "INSERT",
            "DELETE"
        ],
        "answer": "INSERT"
    },
    {
        "id": "ce68d8a9-dc64-4d8c-b218-af1d2afc4d91",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "UPDATE",
            "DELETE",
            "INSERT",
            "SELECT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "1ebd0d1b-af3d-4c22-8a13-159ea503ef21",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "8385d33c-5f82-439b-8e8e-8689769331b2",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "10e88adf-e8ec-402a-83df-9ade46787fa7",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Isolation"
    },
    {
        "id": "f10029d7-91c1-40ab-81cf-021ed47ccff4",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Durability",
            "Atomicity",
            "Consistency",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "4170a5af-4cef-4ef4-8503-dbd2366c49fb",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "b85ef6b9-99c8-4b34-ae71-348199635c1b",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "8e611081-c399-41ff-b1b5-cd656abbf0cd",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "0f137be5-008e-411b-863e-b8f3785911f5",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "3a12f98c-9a5c-49c6-bbf9-59778fdfa743",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "b1e97c24-3972-43a9-9825-1faf0b47ffde",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Queue"
    },
    {
        "id": "b07f4e20-6695-49e0-97a0-e6b43b13974d",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Stack",
            "Linked List",
            "Heap",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "99b34a8e-bbc4-4141-ae8c-9e114b9dba7e",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Stack",
            "Queue",
            "Linked List"
        ],
        "answer": "Linked List"
    },
    {
        "id": "00e77a88-92d9-4094-976b-dca5d32064a2",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "8d3ea658-5451-4574-a8a1-eaa96fd51993",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "12765009-457b-4030-8053-4a5c42d62296",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "a114b281-eaf9-43a3-81d0-66f6dc27cdb6",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "db374cc1-0bda-4bbe-a494-de2f3663f1c4",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "f1040716-5485-489e-94f5-9405fcc6e9ec",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "5c0304fb-d4d6-431b-bed8-3d004b7616f4",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Handle I/O",
            "Schedule processes",
            "Manage memory",
            "Ensure security"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "3f027cc5-8283-422f-b969-846f2968b0ed",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "6a122751-c44e-4018-95c5-de28a11a2eb3",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "18",
            "24",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "66feb5d3-0a84-469b-b1c1-02b06581afcc",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "18",
            "9",
            "32",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "13fd3f0c-5c50-466c-8a85-38de803e1afc",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "24",
            "18",
            "32"
        ],
        "answer": "50"
    },
    {
        "id": "bae9f140-388a-48e7-942a-8b3bd206721b",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "18",
            "80",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "05bcf4fa-da0a-4f9d-ae48-bf3b82f514b2",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "4 km/hr",
            "5 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "9fc38756-953b-4318-8322-40534e3df26b",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "3 km/hr",
            "5 km/hr",
            "6 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "33bb9759-6031-45c1-b2cc-52bd1f63f4cc",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "d6f52fa0-93bb-484c-bc68-34e3e113c47e",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "5 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "ed228f1a-5b96-4b7e-a58e-28fff506c44a",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "d91bf1e8-a8f4-4f8e-915e-e436471156c7",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "09c7eb2a-f489-4d99-954b-97c5c701af5a",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "21c44ed6-ba3d-4885-9a4c-71c2f2f3a620",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Late",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "c76444a0-cd60-46fd-bdec-9026b8997c7d",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "12106ece-a00d-4e5b-a558-8aef5360e0e4",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "INSERT",
            "SELECT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "c2e6b615-f681-46f5-8991-71149aa59537",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "SELECT",
            "DELETE",
            "UPDATE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "8f5eb2f5-50ba-4460-a38c-34225d5944fd",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "DELETE",
            "SELECT",
            "UPDATE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "5d4129b3-9114-4299-9c34-7ef3b98eb120",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Atomicity",
            "Durability"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "ba0f712d-a7c2-4dfe-9b22-8747ce7e6416",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Durability",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "e4a1faae-ab73-483d-a5d4-5154d9244dbc",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Isolation",
            "Atomicity"
        ],
        "answer": "Isolation"
    },
    {
        "id": "8444bd3e-49c3-4695-8065-566c7d8c1692",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Atomicity",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "17c0ed23-acfe-45b9-af28-bd4d73caf08b",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "06a81a84-6a19-48e8-935b-bd5b8344934e",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "b9f5437c-f885-4d14-8015-664a7e074f2b",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "06fa90ed-6440-44ac-af03-1aa6d2e06e65",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(n)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "edc8b6e6-dbb9-435d-9847-a214d008dea6",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Linked List",
            "Heap",
            "Stack",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "f4156bc4-2c9d-4474-99ce-f03635680430",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Heap"
        ],
        "answer": "Queue"
    },
    {
        "id": "7aa258c8-b501-4019-808f-a04b5b3ab3ee",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Heap",
            "Queue",
            "Linked List",
            "Stack"
        ],
        "answer": "Heap"
    },
    {
        "id": "000d94e4-6d38-4fe3-bf22-dd58390e54b5",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "answer": "Linked List"
    },
    {
        "id": "edb3d39d-8077-4828-99f9-c577a423c5f7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "ed240e1d-b979-42c8-94fe-f9181b92c254",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "d4eff796-7e71-4ef3-a2e2-cb186136c917",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "0753b477-3139-41e4-b3cd-d883eae84a3f",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "14aad171-f087-4330-8a22-f68b3beedf1e",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Ensure security",
            "Manage memory",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "6bfb7c8e-bbda-4b79-a2e4-327633db40f5",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Handle I/O",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "8ba0c6e4-a15f-4fb2-87ee-8175372dc08d",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Manage memory",
            "Handle I/O",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "f4f31e30-c48f-4f3b-9e8e-c2560e270a96",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Schedule processes",
            "Manage memory",
            "Ensure security"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "2dcf3cb9-5c87-4c00-bc86-c8e1592a7f45",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "24",
            "20",
            "32",
            "18"
        ],
        "answer": "32"
    },
    {
        "id": "0325904b-e8cd-4dbb-9b1d-e9a372fcfcb8",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "18",
            "32",
            "24",
            "9"
        ],
        "answer": "9"
    },
    {
        "id": "9dffede9-0eb4-451b-a3b8-c97f137262cc",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "32",
            "24",
            "18"
        ],
        "answer": "50"
    },
    {
        "id": "40951def-bff1-4def-a02c-2c6a5fe5da55",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "80",
            "18",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "4b634849-9dd5-436e-9c14-3aeffd4e29d2",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "5 km/hr",
            "3 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "af783e93-9b42-466a-8d4c-e68299ce9ab1",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "a11c12cc-dcda-48f5-aa9b-4d19b954caf4",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "4 km/hr",
            "5 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "6aa38b2b-e65f-4d90-bbe3-27ac135a8d77",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "3 km/hr",
            "4 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "a328b3fd-398f-4e65-9713-c2f47032a5de",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "1d47632a-c309-4659-8d8b-55eca3d2ce23",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "e53aa7c0-27ec-43aa-9cac-cb85ec9edd78",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Late",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "6bff7877-5e11-4234-968a-ce7257caa506",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "b29b2798-9520-488a-9fb5-8372be42f6a3",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "118b524e-b81f-4385-a33f-f26b8983488c",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "UPDATE",
            "DELETE",
            "INSERT",
            "SELECT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "be3c0eb2-bd12-45e7-8c95-58dca4302763",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "SELECT",
            "DELETE",
            "UPDATE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "99396b45-6c9f-41e4-a7db-d6bf35ef939e",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "DELETE",
            "SELECT",
            "UPDATE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "6061e852-03e2-41c5-985c-0e1ada1983d0",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Atomicity",
            "Durability",
            "Consistency",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "054dbf09-6618-49e8-b9b2-769b3398981f",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Consistency"
    },
    {
        "id": "37a607ef-074e-4837-9616-a0eeb38649e5",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Isolation"
    },
    {
        "id": "5c21b103-c64a-4969-820c-44f037db5593",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Durability"
    },
    {
        "id": "3f063123-6d6a-48ed-9d74-a09e3656ff9e",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "0eec89c4-7ede-411a-8dcd-e245d6736413",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "439c1b12-bd61-4717-b419-b6f2805daccc",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "4880a281-812d-469d-8242-65766946d54f",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(1)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "884a2c6d-7304-4081-b52c-2c3487ffb8b3",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Heap"
        ],
        "answer": "Stack"
    },
    {
        "id": "20a8a082-22ed-4560-95fb-2d27b748d025",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Stack",
            "Queue",
            "Linked List",
            "Heap"
        ],
        "answer": "Queue"
    },
    {
        "id": "29a70695-45ed-4bee-a4e0-4130ea10208e",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Heap",
            "Queue",
            "Linked List",
            "Stack"
        ],
        "answer": "Heap"
    },
    {
        "id": "d3d19307-ccc7-41c9-a635-01ca1cfa7253",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Queue",
            "Linked List",
            "Heap",
            "Stack"
        ],
        "answer": "Linked List"
    },
    {
        "id": "5b552378-00bb-46dc-9451-69665eda52db",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "635e0b31-ae4e-4b8e-8a26-0d99354167db",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "b93b47d6-80e1-4a8e-a91c-f8e9096112b5",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Round Robin",
            "Shortest Job First"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "29549621-7156-4ae8-bc25-4334b2ff871b",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "bff7c52a-5f56-4d65-a060-738ea8106c5b",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "63667e0a-3bda-4ea4-9c76-cc5ef7e1284c",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "1bab645a-4751-42d7-8e23-8f06308b69d7",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "4b2740ce-e0fc-4a46-b0f0-63783f62603c",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "0418889e-60cd-4c98-8f21-23eaf8335b1f",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "18",
            "24",
            "20",
            "32"
        ],
        "answer": "32"
    },
    {
        "id": "3b9c5eea-f412-4869-a975-ce7561f6b751",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "9",
            "18",
            "32"
        ],
        "answer": "9"
    },
    {
        "id": "e0604aab-e26f-4ff0-8071-6df172c94264",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "32",
            "18",
            "24"
        ],
        "answer": "50"
    },
    {
        "id": "951c6130-d478-4cb3-aea0-99b5dfea65da",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "18",
            "80",
            "24",
            "32"
        ],
        "answer": "80"
    },
    {
        "id": "8a63493a-f991-4b0a-af46-643df7b4dbd0",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "4 km/hr",
            "6 km/hr",
            "5 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "89a2dc85-1309-4aa6-8d80-a5775e2aa485",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "f7fc5863-4227-45eb-a985-5baa891e753a",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "5 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "b66efffc-ec52-4c24-9ebd-2088f013876a",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "8d6839e8-a6ed-4d49-8b55-91da05966e4d",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Blame others",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "38ad8e78-bdb3-48ea-af2e-790792f0ab5f",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "e62ebe43-66af-4793-a56d-9c2d451297c9",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Disorganized",
            "Procrastinate",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "b030fac4-043d-4e22-936d-e33a5ee85ca3",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Late",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "ee1de4d8-9abf-41ee-ac70-f5b94afdb897",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "UPDATE",
            "INSERT",
            "DELETE",
            "SELECT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "837ae755-e9a5-4af2-8094-b032ec6c9a36",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "INSERT",
            "SELECT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "97d2bb87-b589-4f24-9604-da7409903871",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "SELECT",
            "DELETE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "211748f3-31ad-4e32-9266-20df31b591b2",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "DELETE",
            "INSERT",
            "SELECT",
            "UPDATE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "579f3c78-4140-4a8b-b877-8ea1877bbbf6",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "cf97bda8-0357-4a50-b254-cfd86d53cf13",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Durability",
            "Consistency",
            "Isolation",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "ccf43d5a-cd44-4ecf-b718-9ef7d4eb57ec",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Isolation"
    },
    {
        "id": "2f4338ea-82a7-4b52-a8cd-e437d6adac8b",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Durability",
            "Consistency",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "4515e026-7acd-4317-ad2d-279e0c2e2703",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "a957db10-eaf2-4fc4-bdde-55db41ef5b40",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "72cb85ab-21d4-4da9-9704-3512c4d21c23",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(1)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "16d05b40-7962-481a-9df3-bce90f704a11",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(1)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "29ca8afc-8f34-4ed3-892c-97df5f40ca18",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "a5531981-39e9-428b-a216-ccc614cb3559",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Linked List",
            "Stack",
            "Queue",
            "Heap"
        ],
        "answer": "Queue"
    },
    {
        "id": "64ccb293-5e80-42e2-b5da-84a3c3015491",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Stack",
            "Heap",
            "Queue",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "5a3226c8-593b-4ccb-9a77-a0e553d05b29",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "cb3a4ae9-1f8c-4390-9540-be5ca0759073",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "97e3aebd-7bb3-4bd1-9e0a-a93bfc9936f7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "2949cd5b-637c-4ac1-9a90-00f6a0d55fe0",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "ca1d37f1-088a-4dd4-8688-3b635588898c",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "e0f70bfa-b8ef-4ac3-b0ed-35e904915871",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "87333aba-c00e-4889-8b2a-2eb00cc704a9",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "cebc851c-c82c-4409-be4b-57353faa0623",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "0fa58484-85ff-4c24-8ed7-75d09217fcf8",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "a0da3699-6cd3-4b7b-b46a-50ad31b5de9a",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "18",
            "20",
            "24"
        ],
        "answer": "32"
    },
    {
        "id": "f8f6ce26-ed9a-4686-afd9-0f97633f0c47",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "9",
            "18",
            "24",
            "32"
        ],
        "answer": "9"
    },
    {
        "id": "7f0f083a-02f2-46db-a095-36b06732705a",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "18",
            "32",
            "50"
        ],
        "answer": "50"
    },
    {
        "id": "c3bd2140-47c7-4698-9b21-4cb006316348",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "18",
            "32",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "fc9dd612-c26f-47c9-93a7-22f9d2226af9",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "2e154576-176b-4901-a678-6f8a19f78b58",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "5e2390bd-ee73-4b13-8fea-759a4fc58b2c",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "6 km/hr",
            "3 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "6eb6ec7a-7eb3-4b60-b434-d49c9e4758bf",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "6 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "1951793b-2261-4479-9565-d6478b1ac63d",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Panic",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "055cce2b-2f4d-4636-aa34-b2bab63aeae5",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "74efb4a0-a936-470c-a53a-c45c78c31313",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Disorganized",
            "Late",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "fcccd7d3-5c01-4442-9202-16e413b19a90",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Late",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "f54d0139-a275-4b47-ba4d-5109467e7d1c",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "INSERT",
            "DELETE",
            "UPDATE",
            "SELECT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "6c8abfe8-bb1f-486b-9b5f-a3f1a970f149",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "DELETE",
            "UPDATE",
            "INSERT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "acb25c5f-e7af-4feb-9e9c-de467ecd0657",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "SELECT",
            "DELETE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "6600c3df-e9ea-4b93-a0be-a5aa86383f23",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "DELETE",
            "SELECT",
            "INSERT",
            "UPDATE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "70df3e71-78c3-4b72-9f5a-305e94f0707f",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Consistency",
            "Atomicity",
            "Durability",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "10b88a79-5de6-437c-b8b9-a9a6aad2e8be",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Durability",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "abd91369-ffb2-493f-aa66-59470d196b0a",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Atomicity",
            "Durability"
        ],
        "answer": "Isolation"
    },
    {
        "id": "26f426b5-cf21-4dc9-b1cf-bf68da8a080f",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Atomicity",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "3107f125-1925-424b-ab5c-33a20433bb2d",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "0edd3206-8989-47fd-a8fb-bab54e813798",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "84a9b534-a397-4e38-8993-29096f75e367",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(n log n)",
            "O(n)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "1fb0894d-e85b-4f18-b07d-117aa987e234",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(n)",
            "O(1)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "270f2cb3-fda4-4dd2-9a15-e4f5b699f835",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Heap",
            "Queue",
            "Linked List",
            "Stack"
        ],
        "answer": "Stack"
    },
    {
        "id": "ec09ad86-ac52-4ab5-841a-34d075a3ca81",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Linked List",
            "Heap",
            "Stack",
            "Queue"
        ],
        "answer": "Queue"
    },
    {
        "id": "375f6056-ec84-4a4d-8632-7f0a41e3941d",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Linked List",
            "Heap",
            "Queue",
            "Stack"
        ],
        "answer": "Heap"
    },
    {
        "id": "b744ca8c-8cd2-4cf1-a35e-e0b588bd32b2",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Linked List",
            "Stack",
            "Queue",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "3d79a099-e70a-4e5f-aca9-34474f65bf23",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "efc84a52-2673-4274-bc7a-108b372e05d8",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "939a0cb2-abbe-422c-8c55-22d334095d55",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "4ad6085e-5101-47c7-818a-78b13dbc7f23",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Priority Scheduling",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "37cc8e9e-90a4-4401-8d16-77c495c167a9",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "90d16630-e612-4135-ba64-74a4e3d93268",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Handle I/O",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "5e63b56a-f06a-4d53-bfc5-ebd10ab44244",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "7af4219b-7d99-4eb3-8ed4-58e93250b8ba",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Handle I/O",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "248abf08-20aa-42f6-88cd-d5cee3ab326d",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "20",
            "18",
            "24"
        ],
        "answer": "32"
    },
    {
        "id": "964766f0-b7a3-4871-ad19-894c311af17f",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "24",
            "18",
            "9"
        ],
        "answer": "9"
    },
    {
        "id": "33cffc0d-0d98-4f74-97b5-1aa5e47bcad1",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "32",
            "50",
            "18"
        ],
        "answer": "50"
    },
    {
        "id": "70d71d83-d178-436e-bbf4-6335891cc2c6",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "24",
            "18",
            "32"
        ],
        "answer": "80"
    },
    {
        "id": "c6586c98-abd5-4621-a4e8-84b966ea5acf",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "5af9a5dc-4373-418b-bbd3-1d053456777f",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "acfa064d-0ca0-4f81-a4fe-8467c770acfd",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "b0355d24-9543-4672-b969-7427a1887168",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "d784dbed-38ba-4856-a2b9-649a791b2b27",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Blame others",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "0c156825-e01a-4a48-a5ba-c45cc71c854d",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Ignore",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "59c2e973-746e-40b0-8f53-9ee271327683",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Late",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "d299b727-5f4a-4063-bfe7-79182ef51258",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Late",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "98de7aa9-f3eb-42c6-902e-6f23aa6ecf17",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "UPDATE",
            "SELECT",
            "INSERT",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "8ea75b18-fddd-4044-8fc4-0ef92c475682",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "UPDATE",
            "DELETE",
            "SELECT",
            "INSERT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "312ee27d-6cba-498b-b6e2-2d01bee1c52f",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "INSERT",
            "SELECT",
            "DELETE"
        ],
        "answer": "INSERT"
    },
    {
        "id": "24ede007-8e39-4e9a-93fe-3196a5e2a7d3",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "UPDATE",
            "DELETE",
            "SELECT",
            "INSERT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "d9bba425-b5d3-48ff-9cef-c6baf3d4faa2",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Atomicity",
            "Durability",
            "Isolation",
            "Consistency"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "56a36cff-24d8-4981-8f8d-46308cf87f19",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Isolation",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "91f3a8fe-26e9-4ebb-bd92-743452b1aae8",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Atomicity",
            "Isolation",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "53d6b5ae-b580-4944-852e-2ed6eb580325",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Atomicity",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "5c069d7f-6a95-448f-b31d-57e6b6f41838",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(1)",
            "O(n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "04693e62-66ec-4771-b310-5e97a7af6446",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "8fd6bf8a-fb60-429f-9624-e7950823e202",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "74c40838-2755-4d8c-bc85-4a942a9f4a02",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "cfbb16a9-a986-4bbb-bde6-69c82d9c0dc6",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Heap",
            "Queue",
            "Stack",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "e6b3a776-eae9-42ba-8ac1-2cd2f6b26a76",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Heap",
            "Stack",
            "Linked List"
        ],
        "answer": "Queue"
    },
    {
        "id": "d02c7c22-27ff-4db8-bfbc-2433a36d1d56",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Stack",
            "Heap",
            "Queue",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "c81615cc-4e8a-451d-bca4-05e7fb1864d4",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "answer": "Linked List"
    },
    {
        "id": "57a4608f-3c61-4f8b-856c-405dde092bd1",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "c97d8144-02be-4746-ad6c-40cca78f60ac",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "172343f9-5a16-4c4a-8084-ab07897c1b7e",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "7e73d118-907d-492e-8619-70b5ed46e18c",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "d5ab6f54-6fc5-4f8f-89b1-973b2ce34ef0",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "6cd18f4c-61ff-40dd-a94b-056d384e89ef",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Ensure security",
            "Schedule processes",
            "Handle I/O",
            "Manage memory"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "47897149-1ec3-4f26-98cc-f97054d0158a",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "fc081897-4722-4bb7-9b35-0139c73a0635",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Handle I/O",
            "Schedule processes"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "ce35c340-81e5-4db7-936b-075a3c0a3990",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "18",
            "24",
            "20",
            "32"
        ],
        "answer": "32"
    },
    {
        "id": "aa3e71aa-f131-45c1-9626-bcce6affcf7d",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "32",
            "18",
            "9"
        ],
        "answer": "9"
    },
    {
        "id": "8c71b4f8-28cc-46d2-906d-aac7ad79f6b8",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "50",
            "18",
            "32"
        ],
        "answer": "50"
    },
    {
        "id": "b1994497-5481-4ce8-ae9a-bebf54a16225",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "24",
            "32",
            "80",
            "18"
        ],
        "answer": "80"
    },
    {
        "id": "9bb047ea-e50a-4974-ab7b-ab7c5cb4c54b",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "c6d84f87-2a74-49e5-bbf4-5aa30d6aba90",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "e3df3d5b-4991-4d92-af01-e7125a67efbd",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "ec9f8b8b-2c58-43fa-aee7-4598d6a19581",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "4755e1f1-1e74-4e5d-85d2-fa01e987ddbc",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "b7a9ee68-257d-4079-a68e-cf7221c0d682",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Blame others",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "283a2adb-161e-46aa-9517-13bf83e815c3",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Disorganized",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "cb0ddc10-27d3-474a-9fa5-12d391ed31d7",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "05aa7ef1-6217-4a08-846f-fe1070d217f3",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "0475c012-3590-4b53-aae6-72cd71198446",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "UPDATE",
            "SELECT",
            "INSERT",
            "DELETE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "a9ebd02e-1586-4b4b-b62d-65c24b7d20dd",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "SELECT",
            "DELETE",
            "INSERT",
            "UPDATE"
        ],
        "answer": "INSERT"
    },
    {
        "id": "183691a9-141d-4d6a-bc3c-2924dd3d1da4",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "126accc3-0cff-4fc8-a32b-5a989aabfcd2",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "48384025-f09d-4d36-a0ab-df87e2dfc7d2",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "bb891861-545a-4839-a55f-5274fabaa560",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Consistency",
            "Atomicity",
            "Durability",
            "Isolation"
        ],
        "answer": "Isolation"
    },
    {
        "id": "3b81473e-6296-4818-8ffc-014608f2a7eb",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "d48f4e4b-1a42-4ad8-a8f5-2640471da66e",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "d19106c8-b984-456d-9515-76be20cc4b8b",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "9fb69386-33dd-4ba4-95e4-334ceb220838",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "e68f9906-6bba-4d87-8998-cdf1d938454c",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "1579173e-c21f-47d8-80c9-71961a055fae",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "04019554-7062-4f78-a9d5-acfbe7ba445a",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Queue",
            "Linked List",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "c5192561-5f11-4ef8-a8e0-b4c1ff3ce1e7",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "ec4a0000-9a4d-4507-9969-bf161355d221",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Stack",
            "Queue",
            "Linked List"
        ],
        "answer": "Linked List"
    },
    {
        "id": "2eefd848-f653-4e9f-bfd7-1ec7d0c84124",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve",
            "Priority Scheduling"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "6765602a-271f-4156-a970-ec2db5964092",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "130e66e7-a472-4aee-8054-7070ae20626d",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "58d9f9d0-b432-44eb-9566-3a31c7311e06",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "942c29b1-f5f2-4a78-9e22-9a8a69c353dd",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "3a5c5fd3-0a1e-4a30-8272-c9557e9d1a8c",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "621142d2-6835-48ea-9533-7287843ca873",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Manage memory",
            "Handle I/O",
            "Schedule processes",
            "Ensure security"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "e486eacb-6881-4261-acc2-39a5b626ca3c",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Ensure security",
            "Manage memory",
            "Handle I/O",
            "Schedule processes"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "a39c8b5e-82a6-401f-97d5-3198728b46e1",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "24",
            "20",
            "32",
            "18"
        ],
        "answer": "32"
    },
    {
        "id": "c0c98b3e-8ffa-4249-b7be-b39bbd47a740",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "9",
            "32",
            "18"
        ],
        "answer": "9"
    },
    {
        "id": "c8c32e0d-da63-4c30-8b64-e5923c9fde92",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "32",
            "50",
            "18"
        ],
        "answer": "50"
    },
    {
        "id": "19445ac6-04d7-45d5-9576-f11f520f04b5",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "24",
            "80",
            "18"
        ],
        "answer": "80"
    },
    {
        "id": "63c42b78-49a4-4aeb-8b52-da98034add11",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "5f39679d-8345-46d6-8117-bf49de74ac9c",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "755c5bb3-5940-4a62-9c3e-4e090a3a6e32",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "4df51120-baf2-4592-a0ea-cfed760d5e0b",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "f960c2f7-1671-440a-9a09-48f81d7de80d",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Ignore",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "79d1a38f-672e-4cfe-ae79-eb54bfbda11f",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Ignore",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "fdff92c4-178d-4839-adcb-b6280cd9aaf6",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Late",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "4ce2443f-0415-4ce0-80c8-8fb2cf932cc1",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Late",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "9299359e-89c7-4554-ab2a-cae2c11819d4",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "DELETE",
            "UPDATE",
            "SELECT",
            "INSERT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "3837c12c-34df-4eb3-8f5a-47b1153097e8",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "INSERT",
            "DELETE",
            "SELECT",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "485e50c9-6767-4821-9d16-c28d5ba63185",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "INSERT",
            "SELECT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "INSERT"
    },
    {
        "id": "2151af08-87bf-4601-a5ee-e65da1856df1",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "DELETE",
            "UPDATE",
            "SELECT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "caaea84f-9308-401f-b844-be53abc2c42a",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "9d6a732b-e5ef-4503-a5cb-0ae64754f405",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Isolation",
            "Atomicity",
            "Consistency",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "8a9399b2-b65f-4256-854a-fe830bee8d65",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Isolation"
    },
    {
        "id": "81cd64da-531c-4e56-865e-8ccd753f6667",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "5bf428b3-6228-46d0-af0a-d31a3aa7b25b",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "f9426e0b-59d6-48c7-a147-349a03fa18cf",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "967a765b-4571-41e1-9d3c-3885693ff14c",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "c7763a73-0073-4fc7-85aa-ef9d2a4f4651",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "46462829-1b08-40c9-99b0-e6cc51f6211a",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Heap",
            "Linked List",
            "Stack",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "edce79a0-c1b2-477e-bf68-8383b33f09ac",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Heap",
            "Stack",
            "Linked List"
        ],
        "answer": "Queue"
    },
    {
        "id": "0a4d6fe7-44c8-402a-89b2-abc124d6f0b6",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Linked List",
            "Stack",
            "Queue",
            "Heap"
        ],
        "answer": "Heap"
    },
    {
        "id": "4a99ee29-08a6-4b35-a2db-a8f4accd048c",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "1b97205e-33a5-4105-9e3e-5e87ed1f0527",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "eb4b2ba0-dc44-4389-b934-3944821c744d",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "85f545ea-dff4-49e9-a173-9775d3efb9f1",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling",
            "First Come First Serve"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "f7d74a23-6ea7-425f-a7f8-622696ebbe9a",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "446bfca7-5dc2-4b2e-880e-3077e70191fb",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Ensure security",
            "Manage memory",
            "Handle I/O",
            "Schedule processes"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "bd2da766-ef4d-42c6-b4e9-12f7cf4e8f0f",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Handle I/O",
            "Schedule processes",
            "Manage memory",
            "Ensure security"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "b621b141-dc52-4a59-8ffd-86d0f89561d0",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "7303083d-a369-4b30-9df5-6bb734c34d2a",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Schedule processes",
            "Ensure security",
            "Manage memory"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "69f04f2c-e823-40dc-86fd-04c25354dfb5",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "18",
            "24",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "681258ed-59e8-4e9b-9d8b-96939e14a323",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "18",
            "9",
            "24",
            "32"
        ],
        "answer": "9"
    },
    {
        "id": "93623881-89e3-44ef-b1da-62f2d9cb6eed",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "18",
            "32",
            "50",
            "24"
        ],
        "answer": "50"
    },
    {
        "id": "8ac039a0-920d-4bc1-8c21-8f946accf8f5",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "24",
            "18",
            "32",
            "80"
        ],
        "answer": "80"
    },
    {
        "id": "55a43a73-62bf-42bf-b362-17129e7009f7",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "26e3943b-dfcc-4aaa-a98a-16062828ea75",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "1d0d18d6-598a-4de6-99d0-d94af0e2f4a8",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "682f490b-23f0-4a1e-b0ca-564f4ef730d3",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "6 km/hr",
            "3 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "808d80e5-7b60-4323-b171-1a2ae93de82e",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "8602a22c-d057-470f-a63f-982fbaabf09b",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "bc10cb1b-874d-4c3a-8be6-b34feaa74fff",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Disorganized",
            "Late",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "100cf867-1f49-42de-a896-7bd3410fbb2f",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Disorganized",
            "Hardworking",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "58815fa6-7b8b-4ad6-aa23-7d41ac20d6f3",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "SELECT",
            "DELETE",
            "UPDATE",
            "INSERT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "44b34658-d242-4b92-a332-38ca0a0b2f5e",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "DELETE",
            "INSERT",
            "SELECT",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "c1971f22-6b30-4038-a09d-aba1a274c7e2",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "SELECT",
            "UPDATE",
            "DELETE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "f3c82145-26fd-4f01-937e-72a53e43a985",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "e60f285f-93b7-4227-8c63-ecf5b9ba9c21",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Durability",
            "Consistency",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "07716fc1-caae-4af7-9daa-70a5b87b2ce5",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Atomicity",
            "Isolation",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "9539a4d6-a2fa-4be4-98e2-9fb35578fc08",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        "answer": "Isolation"
    },
    {
        "id": "903c41c1-5a1e-42e4-b725-7e34411d0dda",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Durability",
            "Consistency"
        ],
        "answer": "Durability"
    },
    {
        "id": "900992a2-bcb6-4296-850e-9f484a337bc1",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "1f21c6bc-0323-4bc8-b7a5-0449135f4e30",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "8e696522-b32e-48ac-96e1-3a99401a8dc3",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(n log n)",
            "O(n)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "490e3970-5147-4c85-b313-0718a363bde3",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(n log n)",
            "O(1)",
            "O(n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "74d6b5c3-2d4a-40eb-869f-cb193ce9d5ab",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Stack",
            "Linked List",
            "Heap",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "3a7017a6-7f60-44a4-8fe3-440c85f44f42",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Linked List",
            "Heap",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "12d3c411-a9fd-4b96-8701-bcb0fb22aec3",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Heap",
            "Linked List",
            "Queue",
            "Stack"
        ],
        "answer": "Heap"
    },
    {
        "id": "25979359-0cf8-4e2b-a726-e6d4c99c6851",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Stack",
            "Queue",
            "Linked List",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "c9a972b5-7a9c-4a4b-bab4-e51a538161c4",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "fd6d1b13-aa4f-46f5-88ca-a0bc1fb68705",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "badf314a-c672-4ddd-8e9d-674d4f93c577",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "413d8b83-0949-4090-bf7c-2f774e14b177",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "5309d73c-9973-4a58-b096-b928b844c840",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Ensure security",
            "Schedule processes",
            "Manage memory",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "2149fa6e-d6cc-4a1c-9d63-963dad7b9039",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "0d4a6b96-20d2-4dd5-93b0-7b19be11b855",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "0479e109-012b-4046-8857-b5dbb2430615",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "fabaf485-1572-4980-b898-0418c0ab9542",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "24",
            "20",
            "32",
            "18"
        ],
        "answer": "32"
    },
    {
        "id": "f6b9be58-eddc-4775-8d55-20d082836170",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "18",
            "32",
            "9"
        ],
        "answer": "9"
    },
    {
        "id": "bac69baa-6829-40af-a951-47ccffca2619",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "32",
            "18",
            "50",
            "24"
        ],
        "answer": "50"
    },
    {
        "id": "e26f1770-cc4d-47e1-9976-63d0200ca381",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "18",
            "32",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "cd4b8cd5-2e01-49d7-8d48-50d8bf353f5d",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "d3339df8-2bfc-496d-95c2-b8226c478cb5",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "261b9be2-db18-4cd4-9a99-2bef8f6f34fd",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "6 km/hr",
            "3 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "50aa3195-8b43-4ada-9e83-039d63f9d07a",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "984d1339-d5dc-4422-9108-f68ac191ece2",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "8f27f676-1e1b-4437-8f1d-85df969da999",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Blame others",
            "Panic",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "74bef4a5-454d-41ad-beb5-088fff030a27",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "53d90308-b6e4-491a-8e96-81375fd13b38",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Late",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "3893c473-8a5d-410b-80a6-336ce89c9e66",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "SELECT",
            "INSERT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "16ac9ad9-1ef2-4da1-9073-e66da4650748",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "e13d4985-ef11-42ca-a26c-d90cd8dbc2b4",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "SELECT",
            "DELETE",
            "UPDATE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "72093d28-3360-40f0-a6e8-f93a4a96fae8",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "SELECT",
            "DELETE",
            "UPDATE",
            "INSERT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "d4e90094-9c31-461a-bd38-76d9c9e78687",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "7d6c8ab7-9a3d-44a6-a145-6267a49676fd",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "db428d33-f0e4-4e72-b6c8-dde52b215ab9",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Consistency",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Isolation"
    },
    {
        "id": "e40c259e-23e2-479a-a824-4eb7b5a6e4cd",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Atomicity",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "76e12bfb-f5a4-4fec-8cd0-24838918fdde",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "b9d21664-e3f6-4a1f-a519-c9545533cee9",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "4e17d951-a217-4768-8aea-420cfa118d11",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "1e65b3e1-0b13-4126-88e6-a0c94cc627b1",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "e6f1bec0-8ed2-4901-8ca0-5bea29f8d77c",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Heap",
            "Linked List",
            "Queue",
            "Stack"
        ],
        "answer": "Stack"
    },
    {
        "id": "6b6ea65f-5cc3-4276-810b-c2ab448dffb3",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Linked List",
            "Heap",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "fa1e8c51-6241-4a46-aa9d-32c784b2cc86",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Heap",
            "Stack",
            "Linked List",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "7588b6da-1394-45f4-b9d7-9eb40d5f6af8",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Linked List",
            "Stack",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "316a9cae-5b39-46cb-ba36-718f8d29e612",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "0936320b-4132-48f2-ae8d-108e960db06b",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "22fe2bbe-f48d-48e8-a7b8-bdf6b55c7d24",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "2ec85f18-2eb8-450f-9147-3f15831dc8c3",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Shortest Job First",
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "154f4a7a-b6c1-49a9-9f59-eb626b53c717",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Schedule processes",
            "Ensure security",
            "Manage memory",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "bf33d106-0630-462b-8d2f-1f51a99f8781",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "cb704594-48ba-42ed-840d-a7bb35b7c25d",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Handle I/O",
            "Schedule processes",
            "Ensure security",
            "Manage memory"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "5541f532-3a09-4c1f-8a24-f7ee8e7ac839",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "26fb8174-af65-497c-a0da-74684c5ac96f",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "18",
            "24",
            "32",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "a36ba206-dde1-4f42-aa49-d947be1ea9d7",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "24",
            "18",
            "9"
        ],
        "answer": "9"
    },
    {
        "id": "a888fa4e-c169-4a9b-b0ed-373f7b71d399",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "24",
            "32",
            "18"
        ],
        "answer": "50"
    },
    {
        "id": "5dd41465-a83d-4f66-8928-adb8ccc4e380",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "32",
            "24",
            "18"
        ],
        "answer": "80"
    },
    {
        "id": "a3eeb10d-69bc-4683-87db-54a7a96eb9f3",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "6 km/hr",
            "4 km/hr",
            "5 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "6d1ac5bb-0c21-4b16-a5d7-19b520899a7d",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "5 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "15e66208-cbee-471d-ac93-80a65d3d455e",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "cb0dd7e7-9833-4955-8f94-1a06710689a6",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "9e3f3fc0-9f42-4933-9ae3-e8c9ca579742",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "fdb2bd73-7a42-4e74-a7a1-703133b7b6a7",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Panic",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "a20ab78c-a0e1-4863-9123-29ffbd693a0d",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Late",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "7dbdff92-1f34-4178-bc5d-3e88ce36ce8b",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Disorganized",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "d97ba3af-3d25-4ff9-83e6-a73b3f41106b",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "ba4d1746-7c8d-4590-825a-4b1834bec27a",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "UPDATE",
            "INSERT",
            "DELETE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "5b4865bd-d1fc-4aed-93f5-82def967ebd3",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "DELETE",
            "SELECT",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "180204bd-8ce7-43d1-9ed1-b2e8a8611f88",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "SELECT",
            "DELETE",
            "INSERT",
            "UPDATE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "ece02b19-b370-40c8-9384-f681542960ce",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Atomicity",
            "Durability"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "1b96a387-5b0b-492a-b01b-c87a0d32e7f7",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Atomicity",
            "Isolation",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "86972b02-daf1-4452-b4b3-c51613df917c",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Atomicity",
            "Consistency",
            "Isolation"
        ],
        "answer": "Isolation"
    },
    {
        "id": "6b6685b3-2807-4ecf-b81f-7e54cea002ec",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "d687d618-56be-4ba1-9e53-95f7242c271b",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "68516c51-6bc4-4d6c-8c39-392d345f2495",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "29446443-1f12-4d29-b20d-7513164adde8",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "a4616cd0-6be3-4680-a477-d7eea943c2c3",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(n)",
            "O(1)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "2715dec4-8ba0-44f4-b87d-9b720a7be15f",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Linked List",
            "Stack",
            "Queue",
            "Heap"
        ],
        "answer": "Stack"
    },
    {
        "id": "31802e89-95f9-4f1d-ab40-00e698510c7b",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Stack",
            "Queue",
            "Linked List"
        ],
        "answer": "Queue"
    },
    {
        "id": "42c9d7ce-bb69-4670-9fb1-a2e7e9b21aaf",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "f0c74e6c-5f82-4157-9a57-12afba2de663",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Stack",
            "Linked List",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "63fd1f96-6a91-4699-8ad0-933e33bea678",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "fb002f0f-f2cb-4fce-ae7b-345629f12c96",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Shortest Job First",
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "4be3ba11-5ab5-4625-b3c2-40b0e3d0ce87",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "82bce15d-1a6a-4e9f-9483-aceeb294decf",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "First Come First Serve",
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "fd8f313d-39ac-42c2-a48b-5477f09471c4",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "64400d27-a911-4ff9-a08d-e8994f366b42",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "75c94469-1f71-423d-85a7-ab4fc656cace",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "23eb2c36-0c04-4a2e-abdd-1f82423ac5b3",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "081d41d4-1fde-47f2-a7bc-48b6e94ed8d9",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "18",
            "20",
            "24",
            "32"
        ],
        "answer": "32"
    },
    {
        "id": "f7e0f158-799a-462f-9be9-47c7cdcc166d",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "9",
            "24",
            "18",
            "32"
        ],
        "answer": "9"
    },
    {
        "id": "51bdadf7-363b-468a-8f67-49a5977b4940",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "32",
            "18",
            "50"
        ],
        "answer": "50"
    },
    {
        "id": "7c2fba5e-e444-43e5-bf1d-b7adfe6bcd71",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "80",
            "18",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "cb30bd0f-1842-4358-b809-2801964fcaf7",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "2733e045-a80e-4eff-aa7c-9af4e946cbd0",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "6 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "b0617e2d-6ca9-43ee-b04c-08cca32e14ef",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "6 km/hr",
            "3 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "348a58e3-9adf-425d-9b49-39765fb63c61",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "16e7f264-9442-445a-aefb-653a93ac27a3",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Panic",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "4d10e531-3308-433f-9d3d-c26854481941",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "4be8fa4f-82bf-4044-b3d3-9c9a738e008f",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "dd5b1b30-b998-4f0f-a4ca-9e566d0a59be",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Procrastinate",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "e03820d3-5ddf-4866-af1d-1b29a6f521a8",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "5b9fc3ec-745e-4bcd-a09a-e8b39dfd8795",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "DELETE",
            "INSERT",
            "SELECT",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "eb062267-3ab7-40dc-91fd-8d9a3cc82a3b",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "INSERT",
            "DELETE",
            "UPDATE",
            "SELECT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "50589245-a267-4e0b-8fd5-78f33f24b825",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "SELECT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "072ea55a-28e3-40dd-9bde-92be7247c492",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "01af2373-65fb-4858-8676-9353febff932",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Durability",
            "Atomicity"
        ],
        "answer": "Consistency"
    },
    {
        "id": "c541cc57-98a3-4ead-ad01-9102ce9f50e7",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        "answer": "Isolation"
    },
    {
        "id": "12602882-ab98-4540-b92f-13f1b4502a0e",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Durability"
    },
    {
        "id": "5d355e45-5400-4c74-98b6-c0bc42c5b0bb",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(1)",
            "O(n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "56b69e98-a7d5-4203-be3a-c94291415044",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "c31ef366-3f0e-43cf-bf42-8d08bcfb8baa",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "0888e21d-3c99-4302-9cda-05200c86d044",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "54d5a58d-e978-4341-a528-d7bce9015a2f",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Queue",
            "Heap",
            "Stack",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "d53b331e-d29f-4b1b-b8a2-4db82ac32885",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Linked List",
            "Heap",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "cb46810b-1080-4f2c-b1cb-2920dec76dad",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Linked List",
            "Heap",
            "Stack",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "918534b9-3033-41eb-9184-d3152c1d1c8d",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Linked List",
            "Stack",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "9bf8001b-b587-46f3-875c-783805d81d25",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Shortest Job First",
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "09049234-1a68-4017-8851-39440afeca88",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "2852a768-9507-446a-a482-88848e824cb7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "First Come First Serve",
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "6620b6d6-0292-4f77-91d1-ac25ce8008ec",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "af67e588-808b-4999-8a04-4682e02269ba",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Handle I/O",
            "Schedule processes"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "40e85412-f91d-46d9-95af-b07096cecca9",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "47fda180-ac4d-4ae3-a545-154703287044",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "5caa9085-26bc-4cd6-9af2-ddb32fbc78d6",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "b3b9ba72-6c10-4c2d-89fe-c12eaf1d9077",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "24",
            "32",
            "20",
            "18"
        ],
        "answer": "32"
    },
    {
        "id": "49da81bb-35ea-4b7a-918b-5b8d2b4e1288",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "18",
            "9",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "7842b8eb-4e46-463c-8784-274977c5afd9",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "18",
            "24",
            "32"
        ],
        "answer": "50"
    },
    {
        "id": "eae99b11-9644-4f09-b192-7d762d5b3487",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "32",
            "24",
            "18"
        ],
        "answer": "80"
    },
    {
        "id": "36edafbc-ceda-430b-b72b-3b17f618b198",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "da403242-4934-4c69-992a-9a5fff3a1e5a",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "5 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "670789af-14e7-4e6e-95f7-c800c9f0e1b6",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "5c74406a-6268-4c60-8d9b-6b7b58ac5301",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "11e709d8-bf1b-4bae-8e71-ed84ae2e1149",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "1c94080a-42e8-427a-878f-0d7a34a44a34",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Panic",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "36dd30d7-5056-408b-a785-1893201f621f",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Late",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "c0eba7ca-53bd-49db-ae97-5bface874442",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Procrastinate",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "f877f1f1-5c59-4ea6-8746-d5cf0bb66fdf",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "UPDATE",
            "INSERT",
            "DELETE",
            "SELECT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "448b291f-5029-422a-9b34-86fe8173f248",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "UPDATE",
            "DELETE",
            "INSERT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "cc2dcab7-4f49-4835-96f8-c417c3a820fa",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "SELECT",
            "UPDATE",
            "DELETE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "f9f9b924-5eb3-4a78-acdc-e5b92daad2bc",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "5d024737-4a22-4242-9b3c-46cc04060a56",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "2088c5e4-05e5-4869-80c2-b013f1e03bdf",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Consistency",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "2e583b85-8b16-4662-bf6c-415933c511e3",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Durability",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "955f524d-f5eb-4959-ac23-69a5f2f737c2",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Durability",
            "Atomicity",
            "Consistency",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "07a98101-ebcb-446b-89eb-bfc268cc123c",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "d08bef64-1f61-40cd-9179-cdfd799040ad",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "61962a09-0272-4178-9e3b-ce9b8e4f93ff",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "491f9ffe-8b57-4f3d-966b-cf0696b1328d",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(1)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "f3097e47-3c14-495c-ad72-3bd311288ff3",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Heap"
        ],
        "answer": "Stack"
    },
    {
        "id": "983757bb-f653-4fbd-8506-4b86ea9cbe3a",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Queue",
            "Stack",
            "Linked List"
        ],
        "answer": "Queue"
    },
    {
        "id": "047fe228-4503-40eb-8ab4-ecae4e0c1cf4",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Heap"
        ],
        "answer": "Heap"
    },
    {
        "id": "e710335c-09b7-4990-a9ae-ad10718ccbac",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Linked List",
            "Queue",
            "Stack",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "ce1d520a-206c-4f99-84d7-b1b642b20607",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "84ad7a94-ab10-472b-a89e-8b84681dba50",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "afcebd5e-7f31-41e7-97f1-ebe1c4f76d31",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "bd92e21f-54a0-4f00-b38b-7028c935c48a",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Round Robin",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "dafacfaa-af6d-4d62-a1e3-888a978fc133",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "55281621-c271-4bc0-a111-10c36a85b442",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "3f68517c-7de2-44e6-8079-1f4323116086",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Handle I/O",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "de8b5012-6674-45e1-bc1b-237e9dfe0681",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "6176c3eb-9482-4216-9983-17c09d4b3a25",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "24",
            "20",
            "18"
        ],
        "answer": "32"
    },
    {
        "id": "0fef898e-b809-4724-b72c-0fd235e3896b",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "18",
            "9",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "93b12cc2-0671-4830-9611-42a1900eb5b2",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "32",
            "50",
            "18"
        ],
        "answer": "50"
    },
    {
        "id": "7591323e-b92b-43c7-877e-f51808d819a1",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "80",
            "24",
            "18",
            "32"
        ],
        "answer": "80"
    },
    {
        "id": "017d553b-ecb5-4932-b603-9cedef362818",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "c6d8cee3-5aff-48fc-9c36-ee3211c67f52",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "b8d77d34-9c48-4e78-b201-ffc508675fd5",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "5b1f93ce-9070-4362-a556-1d2da939861d",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "5b599ead-5023-446c-8a7f-54bd84e23423",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "23e36a8b-82ae-4429-8d4f-a075fbc3d3c9",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "5333a174-edcf-4a3e-a33c-2d1fb4cd70bf",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Hardworking",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "55338852-4fa9-429c-a5ad-8ff5a57fde22",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Late",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "40278b99-cbd2-42af-9531-65ffbf827a44",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "UPDATE",
            "DELETE",
            "SELECT",
            "INSERT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "c817002e-06db-4916-a79c-468f60e634b8",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "UPDATE",
            "SELECT",
            "INSERT",
            "DELETE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "2b01ca78-d1ee-4a10-a4e5-87a24d08a85d",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "DELETE",
            "SELECT",
            "UPDATE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "8c9ce2ab-d967-440d-9e4f-46da3906b1c7",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "3dc9682d-0fba-4db6-bc4e-9065fbbaa5f8",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "95602f64-a956-4546-b688-ded70283bf7a",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Atomicity",
            "Durability",
            "Isolation",
            "Consistency"
        ],
        "answer": "Consistency"
    },
    {
        "id": "04691f15-154e-435e-a206-0c6d957d31f5",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "80fe0a19-243c-49ea-8e2a-8ced4ececc50",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "aaa85706-79d1-4564-a39b-14e2429df10b",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "7fdb7f6c-848a-4f72-ad18-d79c23c9be4b",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "f103dd72-3331-4737-bd78-660b8f826fd3",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(1)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "47be6143-cd18-4f09-8a09-1fa5fa6d9d66",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "2ff99d71-5100-4486-b4d3-757bc22b0cb5",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Heap"
        ],
        "answer": "Stack"
    },
    {
        "id": "565a2b51-355b-42c4-9b84-19e1ee92709b",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Heap",
            "Linked List",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "32205370-ac03-4507-a01b-6beb6602db66",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "310e3fb4-9cef-4f87-afa5-91572c6d0918",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Linked List",
            "Heap",
            "Stack",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "44b35fd2-c465-4c88-8922-d2561638ce1e",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "b125dd23-ebb9-4ecf-bb76-2a4609085875",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "a73ced12-6792-480d-ac9e-15e1ec813a58",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "6a26da9a-41e2-4b62-833c-7782b6222715",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "4a97351d-e03f-449b-98b8-52a767d5f7ce",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Schedule processes",
            "Ensure security",
            "Handle I/O",
            "Manage memory"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "4f7aaa47-5a28-43d3-b3f1-7ff84573c4fb",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Handle I/O",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "e60410fa-2644-4be8-9e63-028f72eb47aa",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "19083269-78a4-4bd8-83d9-3a8da1bd2dca",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Schedule processes",
            "Ensure security",
            "Manage memory",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "a4c2ecd6-9c34-4448-b8e2-acb850891329",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "18",
            "32",
            "24",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "c5114b7f-f085-41ee-b4f2-9ae1acab4c37",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "9",
            "18",
            "32",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "b08f8c24-f549-4be6-a964-816aeab1328f",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "18",
            "32",
            "50"
        ],
        "answer": "50"
    },
    {
        "id": "dcb0d960-dd99-4d83-b826-e47536666448",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "80",
            "24",
            "18"
        ],
        "answer": "80"
    },
    {
        "id": "81f7bcf0-8cb0-4f9d-8976-12037990e649",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "fd6b08b7-3c00-4d95-b210-882bea585aa5",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "7e6683a3-ca54-450b-85cd-d014e5ac2460",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "4 km/hr",
            "6 km/hr",
            "5 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "05c8ce86-87b0-434e-834c-c6aae18fe6fc",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "cf4c0624-ea7a-4f67-9ffd-1f020a901040",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Ignore",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "519082ea-ba6d-44be-b9de-c3a33d1bd122",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Stay calm and solve",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "9ed52425-ee66-4166-a4c7-e02499b549bf",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Late",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "0b409145-a61e-465e-85be-a42c322abff2",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Procrastinate",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "76e2352c-657b-4f53-8769-dd00547d651d",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "DELETE",
            "SELECT",
            "UPDATE",
            "INSERT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "6d299919-80b1-459b-b415-a2e8f99b1e7d",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "UPDATE",
            "DELETE",
            "INSERT",
            "SELECT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "8bab2261-aa77-4c7e-880c-9d6c7054f4a0",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "INSERT",
            "SELECT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "INSERT"
    },
    {
        "id": "212cbf33-7765-4cb8-8a4c-9e7fe467382c",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "81c04be4-cce5-443c-be31-4b7665bd5714",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Isolation",
            "Durability",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "6c825878-1897-4f3a-9191-796fae42bc4d",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Consistency"
    },
    {
        "id": "fd86d7ed-0cb8-4854-8c2e-d1085943235a",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Durability",
            "Atomicity"
        ],
        "answer": "Isolation"
    },
    {
        "id": "7567f8dc-a695-466a-8026-f7d01eae54ab",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Durability",
            "Atomicity"
        ],
        "answer": "Durability"
    },
    {
        "id": "e70beb29-974a-465a-93d1-de1e9bfcb8c8",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "7812c709-736b-43ee-b173-49a9c10f8c92",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "d38159e0-fa2f-423c-b320-0455490e63e2",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "31617d0b-b4c3-4fbf-8e89-fedd46b0acc7",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "604ac94e-9977-4f9e-acff-0d13f113d5b9",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Heap",
            "Stack",
            "Queue",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "fcd236ac-9a02-481f-8832-90462c328239",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Stack",
            "Linked List",
            "Queue"
        ],
        "answer": "Queue"
    },
    {
        "id": "891c2a76-0af9-47d9-9d7a-1ff1c3c6ad5a",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Queue",
            "Heap",
            "Stack",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "5431d724-732b-4bbf-bb9a-8578c6c7c446",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "1c5f2686-c66c-42bf-aee6-ae66f628b1b1",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "c8256082-396d-4f58-8d87-e8cf155f5fe7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "74e27b6c-0c3b-492c-a12d-ffb5d49fa072",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "300e4029-ee7a-4e56-922f-395d1f791f1b",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "2c920859-e832-4a8b-9c68-455409c357ae",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Handle I/O",
            "Schedule processes"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "352d047b-2e37-4bf8-81ed-c89b2b547cdc",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "d58c1de5-a3e6-42e6-99b1-dd3d7737fb0e",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Ensure security",
            "Manage memory",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "ad6ba540-0bf3-4098-9889-e647e050acb3",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "f5e80910-5f64-402d-b16f-0d3ae41af266",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "24",
            "18",
            "32",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "e98fff29-9386-4999-9fc0-a7bd37ad9aeb",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "18",
            "9",
            "32",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "6a75aa5e-8711-4f3a-962c-c49ff42492a5",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "24",
            "32",
            "18"
        ],
        "answer": "50"
    },
    {
        "id": "244538f5-669d-4981-b97f-07573681516b",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "18",
            "80",
            "24"
        ],
        "answer": "80"
    },
    {
        "id": "c5765bec-bf30-48bf-a38c-acdccc805fe4",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "4 km/hr",
            "5 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "ab510063-0f61-43a5-b6fb-477f12b30227",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "40b9fa7e-c1b8-4e60-9e8b-72b4baa10bf1",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "4 km/hr",
            "5 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "113ba4df-1462-4c9e-a4fa-6aa9be84814f",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "7f93e6c8-fabe-4fb4-9395-7c88c6c364a0",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "ec0db01e-1e90-4cad-8f26-b774577fc174",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "b7e97c83-734f-4b30-a4c5-bd54f686f86e",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "48f787d6-3b17-4546-aa92-3bac81a49e7e",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "542904e5-eaa7-4c8f-bdd8-ffca4502644f",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "SELECT",
            "INSERT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "21d403d5-050a-48cc-b582-c4f8b1ccb20e",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "UPDATE",
            "INSERT",
            "DELETE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "966c1d74-0e80-4fe7-ae90-9e809b40cc56",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "DELETE",
            "UPDATE",
            "INSERT",
            "SELECT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "c3dd4cf0-8b2a-4e52-907a-b63887c6a8ed",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "1b1e1390-96e8-482a-ae35-f60379c487c0",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Consistency",
            "Durability"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "471147a6-3117-466b-a08c-09a5d708f358",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Atomicity",
            "Durability",
            "Isolation",
            "Consistency"
        ],
        "answer": "Consistency"
    },
    {
        "id": "ef23a8b7-e721-448f-bfff-e7067f101c3d",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Consistency",
            "Durability"
        ],
        "answer": "Isolation"
    },
    {
        "id": "74eba28f-ece3-416e-9286-2a0bf579414d",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Consistency",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "d8d8816e-ba93-45a3-89d4-0051e23885b0",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(1)",
            "O(n)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "764a6268-a078-4cd7-8dc3-d48ec57de01a",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(1)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "138ec899-627a-49fe-b9d4-27deb0d9fd48",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(1)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "068fbf78-df0a-4aff-aca8-5306eae09b03",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "6731c5ac-480e-4485-976c-c63c6257cdc3",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Linked List",
            "Stack",
            "Heap",
            "Queue"
        ],
        "answer": "Stack"
    },
    {
        "id": "d7892adc-7ef9-4809-9566-fd3aa540f36d",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Stack",
            "Linked List",
            "Queue"
        ],
        "answer": "Queue"
    },
    {
        "id": "49b580c7-d526-4ef2-a236-3073f9e49dec",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "d81cda6d-ba11-4fae-89a0-f20322ea7332",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "773370b7-65f2-4a0a-aef8-5c86998ff9b0",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Round Robin",
            "Shortest Job First"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "138c0a53-3fc3-49cb-85b1-82f776f8913a",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "07893bd1-b845-4fd2-9e03-06e1547501e8",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Shortest Job First",
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "f2554f31-d7fc-4a17-8885-79d6c2a8665a",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Priority Scheduling",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "43957713-9fa9-4e5e-8891-1c7031f2a4b2",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "d8b94743-0902-4c8d-825e-63f7b8f30e8a",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "30c2a185-7fa3-4854-a2a2-c761f90b9e72",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "95bb9c1a-1dc8-40f0-a81b-f4db8e339eec",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Schedule processes",
            "Ensure security",
            "Handle I/O",
            "Manage memory"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "812a7511-5fd3-4e7e-9554-a96774c63a53",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "20",
            "24",
            "32",
            "18"
        ],
        "answer": "32"
    },
    {
        "id": "0f993505-8d88-4a4d-84dd-449d3c3aa078",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "9",
            "18",
            "32"
        ],
        "answer": "9"
    },
    {
        "id": "cd8d4cfb-0856-401c-b030-023129a445e1",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "50",
            "18",
            "32",
            "24"
        ],
        "answer": "50"
    },
    {
        "id": "ad819771-ff78-4214-899b-99454a1dbd76",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "24",
            "80",
            "18"
        ],
        "answer": "80"
    },
    {
        "id": "06703f91-f2e0-4ad1-84dd-f415d2c9ae1a",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "6 km/hr",
            "5 km/hr",
            "3 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "b02ebf11-6a24-4925-9679-040b38b3333a",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "3 km/hr",
            "5 km/hr",
            "6 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "3be62d98-b9c6-4753-82ae-3d587ac0e564",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "4 km/hr",
            "6 km/hr",
            "5 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "e5e03ab1-093d-40cb-b1dd-b40349613da4",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "4 km/hr",
            "6 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "ede20088-9183-4b7d-b71d-59acc38b5181",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Blame others",
            "Panic",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "ef55ac42-5460-42a1-9b89-875b362cb994",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "cd9d09ba-e46e-4dad-8753-2bdfbf56e61b",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "755d6969-70db-4270-af5e-64cc8b1ce29b",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "58c21812-2f83-4af3-9ede-03ebac09e3a1",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "UPDATE",
            "SELECT",
            "INSERT",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "4aeddc2b-b9e8-4585-b3d9-c92b77be54e4",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "DELETE",
            "INSERT",
            "SELECT",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "e7532d5b-7674-4bed-a106-0343a1dfdeb3",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "SELECT",
            "UPDATE",
            "DELETE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "36f9372e-ed3d-41da-850b-b7db9a0531c6",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "SELECT",
            "UPDATE",
            "INSERT",
            "DELETE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "6bdda415-89ae-405c-bd93-4d609ace45c9",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Consistency",
            "Durability",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "84c1e7c4-4204-4ec9-a6c4-633317362c16",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Atomicity",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "81a4af09-7748-465a-aedf-d12b501c416c",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "c66aafcd-a046-439c-a673-cbbbd701f5a1",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Durability"
    },
    {
        "id": "e871d02e-cb22-4feb-b577-e70b12b4f27d",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "8d5a318f-a151-4fbe-a3b1-42c703250a18",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "a50ac018-5d88-4f1a-94cc-9bc9f6ccd73a",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "364b83b5-d649-4cb3-b03f-c4bca30e66ef",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(1)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "08a464c4-9972-468a-bce6-2dee900c6f7b",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Stack",
            "Heap",
            "Queue",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "b9bca947-93ba-4752-9f94-601c3ac46d97",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Heap",
            "Linked List",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "d631e3e3-ce57-40ae-aada-e03d5bbf5c01",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "c5e37410-34af-49b3-96f6-dc74144a7f02",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Stack",
            "Linked List",
            "Queue",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "3b8ee021-196c-4a3f-8b85-be92795a886f",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First",
            "First Come First Serve"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "0214e160-3ab4-4f14-9f4a-d020ed57cb6a",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "First Come First Serve",
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "60e9588b-3e99-44de-bcb9-b04c9e670693",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "First Come First Serve",
            "Round Robin"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "6b2dc2ee-ec73-465d-9f53-fc8765cc9416",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "ecefe68e-1f10-4ebe-8f88-01846dc3e67f",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Schedule processes",
            "Manage memory",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "d021ef6e-a9f7-43dc-bb9f-252f3b4c50ad",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Handle I/O",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "81ea505b-277c-4bda-bb60-00f8ae350446",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Schedule processes",
            "Ensure security",
            "Handle I/O",
            "Manage memory"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "989e5022-6e7c-40d8-9245-74addca700ab",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Ensure security",
            "Handle I/O"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "be66f0f6-2b74-4257-a3fe-ac1f98447016",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "32",
            "18",
            "20",
            "24"
        ],
        "answer": "32"
    },
    {
        "id": "cffb9554-9fc2-44a1-b33e-b9fe5fd8398f",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "18",
            "24",
            "9",
            "32"
        ],
        "answer": "9"
    },
    {
        "id": "ea643cec-5799-4427-9a6c-805d4fbd1346",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "32",
            "50",
            "24",
            "18"
        ],
        "answer": "50"
    },
    {
        "id": "96961f82-f02a-4452-b9d4-74c4e2953af5",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "18",
            "80",
            "24",
            "32"
        ],
        "answer": "80"
    },
    {
        "id": "56439141-78a1-4ebd-95f2-7a202c98f7db",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "3 km/hr",
            "5 km/hr",
            "6 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "e9a0e83a-0768-4b9e-abc4-1b86ce335d63",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "5 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "1e7f04e8-3121-409a-8030-51486f3856ad",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "4 km/hr",
            "5 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "0c58da82-daea-4d4b-88f7-ea49f6a3de26",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "93db48d4-1d39-4036-a8f4-0034d2d517b1",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "4d0ac26d-44e6-4020-9c92-7ef580ef1350",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Ignore",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "45537fca-3243-4d1c-9f46-20068e9e4584",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Disorganized",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "db7e1955-dbde-409c-b0b4-bebf77e73e56",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Procrastinate",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "e68b3c39-ba70-4be6-9b12-2ff35e94cfe1",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "DELETE",
            "INSERT",
            "SELECT",
            "UPDATE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "7b698144-54dc-4fd1-b2a8-b1d0f870e69c",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "DELETE",
            "INSERT",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "9bae01a8-e918-4b33-99fe-7ada6d597529",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "DELETE",
            "INSERT",
            "SELECT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "17aa4159-3eaa-4cc4-9fb5-44c47a863e97",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "UPDATE",
            "DELETE",
            "SELECT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "989f5811-ded1-4f3b-8811-9a403cf1a7e4",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Durability",
            "Atomicity",
            "Isolation",
            "Consistency"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "0f8fd9f5-bb5e-4a8e-8eeb-b446a2752130",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Durability",
            "Consistency"
        ],
        "answer": "Consistency"
    },
    {
        "id": "27e7ee0b-d05d-491c-9c3d-f00479831866",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Consistency",
            "Isolation",
            "Atomicity"
        ],
        "answer": "Isolation"
    },
    {
        "id": "ad4fb55c-b9b7-4cc1-91b5-54bd5031cc12",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Consistency",
            "Isolation",
            "Atomicity",
            "Durability"
        ],
        "answer": "Durability"
    },
    {
        "id": "22062aa1-49a2-43e1-a9e1-35143c8044d4",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "9d5f96b7-1f10-43ed-8e5d-acc3bf198860",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "6cc6cafe-176c-446c-9fbc-0dfd067177ba",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(1)",
            "O(n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "ac654fb8-1bad-4dc5-bc7f-87efa153c156",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(1)",
            "O(log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "5faa9c68-4a03-45a2-bc56-88e3984d5a00",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Linked List",
            "Queue",
            "Stack",
            "Heap"
        ],
        "answer": "Stack"
    },
    {
        "id": "4545f7b1-fc1e-4fe1-9703-612774735abb",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Heap",
            "Linked List",
            "Stack",
            "Queue"
        ],
        "answer": "Queue"
    },
    {
        "id": "30835ddd-4f26-42b9-9b9b-b4308ebb1129",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Stack",
            "Heap",
            "Queue",
            "Linked List"
        ],
        "answer": "Heap"
    },
    {
        "id": "c5ce1b18-a6e3-4fe1-bac3-5d9f4fdba608",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Stack",
            "Queue",
            "Linked List",
            "Heap"
        ],
        "answer": "Linked List"
    },
    {
        "id": "c51f2153-2410-46d8-b88a-6f0996e99658",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "62807477-65b1-4ccc-905e-a1793bd31ed7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Shortest Job First",
            "First Come First Serve",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "706173a1-6a13-4400-8451-77c6e9616c31",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "0e0eff1f-b45e-47e5-9849-871c3e347873",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "e8023aa9-4c40-4cfe-8e8c-839027b0b6b2",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Manage memory",
            "Schedule processes",
            "Handle I/O",
            "Ensure security"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "c4cdcd66-e669-4405-adbb-3b539c83f71c",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "e00fb546-b923-40cb-881c-817de9e9c810",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Ensure security",
            "Handle I/O",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "fb57d716-b0bb-4c2a-9ec9-7dc8ec64509d",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "a7d81b49-14dd-4d1e-888c-d053f5c5b248",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "24",
            "32",
            "18",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "842e8212-492a-441e-b9c3-6f58e6007b14",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "18",
            "9",
            "32"
        ],
        "answer": "9"
    },
    {
        "id": "632ffa14-58ea-42e1-874f-3d6730ab8dd4",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "24",
            "18",
            "50",
            "32"
        ],
        "answer": "50"
    },
    {
        "id": "d1c81c05-2ea7-4465-863a-44f265bfe7dc",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "24",
            "80",
            "18",
            "32"
        ],
        "answer": "80"
    },
    {
        "id": "69e8c7e1-4897-48a3-a9a7-a80715b12c32",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "3 km/hr",
            "4 km/hr",
            "5 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "d2efb930-bb51-42e1-8045-6ed08e2c6d3f",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "21c2370e-565b-4812-861c-b05bd97de474",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "3 km/hr",
            "6 km/hr",
            "5 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "0d71411d-5d12-4c8e-b836-80f08f111b07",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "e7377567-98b1-4e97-9fba-7406ee31da5b",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Ignore",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "e0177bd9-e818-46c1-9f9f-b87ea43a783c",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Blame others",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "bdf7a6f5-d2c5-43bc-85d0-7d96a26833cc",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Late",
            "Procrastinate",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "1a072e7b-56d9-48d4-ac9f-7efe7aa97c05",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Procrastinate",
            "Late",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "ea6a1430-0849-4391-a363-30ccb4b55d95",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "ac0e586c-351e-407b-bc75-74e005125c76",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "b24e924f-fc0e-4647-b7a9-5bf6c4375891",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "DELETE",
            "UPDATE",
            "INSERT",
            "SELECT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "25e86b20-b3d4-45f8-ae54-6c09ea6b67b9",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "DELETE",
            "SELECT",
            "UPDATE",
            "INSERT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "bef0118e-3d36-4298-981c-2949b5f00205",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "3a17c593-e6bb-4357-82b3-23b69b56b981",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Consistency"
    },
    {
        "id": "79717cfb-fec9-44a6-9617-51f63205124f",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Atomicity",
            "Isolation",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "d7db8e21-f1e6-4a76-8ee4-f97692f5ff6f",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Durability",
            "Consistency",
            "Atomicity",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "bdd6ecfe-d950-4a4a-b160-09afe1710adb",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n)",
            "O(1)",
            "O(n log n)",
            "O(log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "a852abad-cce0-4c61-ac82-6ad369b3a610",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "648fadd8-6fe2-4f96-992e-232fe2be6cff",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(1)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "99e7f61c-1cc8-4d5c-9493-a7d613ec5623",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n log n)",
            "O(n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "5ebe51e9-019c-4c8f-ae20-407bfaf0d678",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Stack",
            "Linked List",
            "Queue",
            "Heap"
        ],
        "answer": "Stack"
    },
    {
        "id": "f7697800-69fa-4dd7-bb0e-becd3f36b059",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Linked List",
            "Queue",
            "Heap",
            "Stack"
        ],
        "answer": "Queue"
    },
    {
        "id": "91621051-9182-438a-b90e-63638af269af",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Linked List",
            "Heap",
            "Stack",
            "Queue"
        ],
        "answer": "Heap"
    },
    {
        "id": "abaccd17-f11f-497f-9088-6b3d81a97b16",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Linked List",
            "Heap",
            "Stack",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "ad75a492-fc84-41b9-9105-65a628fbc1f7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "Priority Scheduling",
            "First Come First Serve",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "fa2384e7-9ab7-4e07-86d8-1398569b57d3",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "736abea3-4a29-4332-8436-54e3e2c780e4",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Priority Scheduling",
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "ea55fabd-44ee-4130-a11f-74488f3b6fe8",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "First Come First Serve",
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "3b82c86e-4b11-4bfd-940a-59509f94857f",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Manage memory",
            "Ensure security",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "f8eca4d9-9c8b-4a61-b4c8-19fa93e73835",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Handle I/O",
            "Schedule processes",
            "Ensure security",
            "Manage memory"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "6f67c3d4-d180-49c1-a3b9-9a08eba52333",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Handle I/O",
            "Manage memory",
            "Ensure security",
            "Schedule processes"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "02a0045b-4dd3-46c0-98bb-5b0730faaab4",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "74f436a7-a604-40a1-a5fd-edc1c815df46",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "18",
            "32",
            "24",
            "20"
        ],
        "answer": "32"
    },
    {
        "id": "c396d170-f3a7-4222-b52d-f86425937021",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "24",
            "9",
            "32",
            "18"
        ],
        "answer": "9"
    },
    {
        "id": "4a48c9bb-f014-4cb1-9405-aaae5cfd2ff8",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "18",
            "24",
            "50",
            "32"
        ],
        "answer": "50"
    },
    {
        "id": "330a1ff4-e23b-4059-a30b-656561b58e9a",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "18",
            "32",
            "24",
            "80"
        ],
        "answer": "80"
    },
    {
        "id": "9c195c98-8b97-47f9-8000-6ba756e3b970",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "4 km/hr",
            "6 km/hr",
            "3 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "40e00fc9-3170-4276-8f00-982ef95c5af3",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "5 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "8e6a82e3-c0e6-4e3d-9af6-72784aac17af",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "3 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "613e0d08-a041-43f0-b23c-0eda44465a17",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "6 km/hr",
            "4 km/hr",
            "3 km/hr",
            "5 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "4810e418-3f8d-417f-bd0c-9c9f6d877127",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Blame others",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "c251f58c-3d82-4708-9bc4-01f5d28cf493",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Panic",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "912b246f-a3ed-44b3-a000-d496b5a14e2f",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Late",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "528203e7-afe8-4983-9305-4e3be727839d",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "28712846-9260-4f1d-ad3d-427b18af8949",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "DELETE",
            "UPDATE",
            "SELECT",
            "INSERT"
        ],
        "answer": "SELECT"
    },
    {
        "id": "0108c9de-c618-4c58-9d86-c0c441b95179",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "INSERT",
            "SELECT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "5e559c62-003f-4d8c-a147-7edf0ee93cc5",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "INSERT",
            "DELETE",
            "UPDATE",
            "SELECT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "24433c4d-4dd7-4951-9ed4-b915470662ce",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "INSERT",
            "SELECT",
            "DELETE",
            "UPDATE"
        ],
        "answer": "DELETE"
    },
    {
        "id": "f01162d0-7813-4f66-9b10-29de0220d020",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Atomicity",
            "Durability",
            "Isolation",
            "Consistency"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "a56f87b0-086a-4458-8a71-2ae8d4d3e5b7",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Atomicity",
            "Isolation",
            "Durability",
            "Consistency"
        ],
        "answer": "Consistency"
    },
    {
        "id": "9193acc0-135e-4fd4-bcf3-c03bf7100c9a",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Atomicity",
            "Consistency"
        ],
        "answer": "Isolation"
    },
    {
        "id": "30050c75-5992-4de6-8bb4-79aaf68a2e62",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Isolation",
            "Atomicity",
            "Durability",
            "Consistency"
        ],
        "answer": "Durability"
    },
    {
        "id": "f76b4b45-1bcc-48a1-a2e1-729ce57816d1",
        "category": "dsa",
        "question": "What is the time complexity of Binary Search?",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(1)"
        ],
        "answer": "O(log n)"
    },
    {
        "id": "548be190-9ea0-493c-9f95-d435e3eabdda",
        "category": "dsa",
        "question": "What is the time complexity of Linear Search?",
        "options": [
            "O(1)",
            "O(n log n)",
            "O(log n)",
            "O(n)"
        ],
        "answer": "O(n)"
    },
    {
        "id": "8997f624-440e-4ccd-93d7-7a5f3bdf428c",
        "category": "dsa",
        "question": "What is the time complexity of Merge Sort?",
        "options": [
            "O(log n)",
            "O(n)",
            "O(1)",
            "O(n log n)"
        ],
        "answer": "O(n log n)"
    },
    {
        "id": "a89fa8ba-46d1-4145-bd1c-1949b3bc6b22",
        "category": "dsa",
        "question": "What is the time complexity of Hashing?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n log n)"
        ],
        "answer": "O(1)"
    },
    {
        "id": "6a51f2f8-c61f-4bea-be38-19df2150a183",
        "category": "dsa",
        "question": "Which data structure is best suited for LIFO?",
        "options": [
            "Queue",
            "Heap",
            "Stack",
            "Linked List"
        ],
        "answer": "Stack"
    },
    {
        "id": "6bc12296-77c3-4c6a-a964-7602df746de9",
        "category": "dsa",
        "question": "Which data structure is best suited for FIFO?",
        "options": [
            "Queue",
            "Heap",
            "Stack",
            "Linked List"
        ],
        "answer": "Queue"
    },
    {
        "id": "af3247db-65d3-4a6c-841a-21d8c4d16e8e",
        "category": "dsa",
        "question": "Which data structure is best suited for Priority Management?",
        "options": [
            "Linked List",
            "Queue",
            "Heap",
            "Stack"
        ],
        "answer": "Heap"
    },
    {
        "id": "1ac60045-df6c-466d-beee-026d2fb6b388",
        "category": "dsa",
        "question": "Which data structure is best suited for Dynamic Memory Allocation?",
        "options": [
            "Heap",
            "Linked List",
            "Stack",
            "Queue"
        ],
        "answer": "Linked List"
    },
    {
        "id": "849e142c-e03b-439b-99e5-431199958de2",
        "category": "os",
        "question": "Which scheduling algorithm is used in Linux?",
        "options": [
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling",
            "Round Robin"
        ],
        "answer": "Round Robin"
    },
    {
        "id": "02710a27-4a9f-49d8-862a-0dc49c09d5dd",
        "category": "os",
        "question": "Which scheduling algorithm is used in Old MS-DOS?",
        "options": [
            "First Come First Serve",
            "Priority Scheduling",
            "Shortest Job First",
            "Round Robin"
        ],
        "answer": "First Come First Serve"
    },
    {
        "id": "f997a83a-6801-41ec-af10-e30ef9726da7",
        "category": "os",
        "question": "Which scheduling algorithm is used in Batch Systems?",
        "options": [
            "Round Robin",
            "First Come First Serve",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        "answer": "Shortest Job First"
    },
    {
        "id": "b77aa01d-1b48-491a-852a-4c5bf703ebef",
        "category": "os",
        "question": "Which scheduling algorithm is used in Real-time OS?",
        "options": [
            "Round Robin",
            "Shortest Job First",
            "First Come First Serve",
            "Priority Scheduling"
        ],
        "answer": "Priority Scheduling"
    },
    {
        "id": "cec4ae9f-5d67-4053-bb2b-2dbb3661f5e5",
        "category": "os",
        "question": "What is the function of MMU in OS?",
        "options": [
            "Ensure security",
            "Manage memory",
            "Schedule processes",
            "Handle I/O"
        ],
        "answer": "Manage memory"
    },
    {
        "id": "fb1e77a9-cdd6-4de8-a91a-9f51cc19b9a7",
        "category": "os",
        "question": "What is the function of Scheduler in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Manage memory",
            "Schedule processes"
        ],
        "answer": "Schedule processes"
    },
    {
        "id": "2bcdf05f-604a-45a0-8c35-5ed8b2706608",
        "category": "os",
        "question": "What is the function of Device Driver in OS?",
        "options": [
            "Schedule processes",
            "Ensure security",
            "Handle I/O",
            "Manage memory"
        ],
        "answer": "Handle I/O"
    },
    {
        "id": "d9cfed5a-12a5-4a4e-88a2-b29063bf8275",
        "category": "os",
        "question": "What is the function of Kernel in OS?",
        "options": [
            "Handle I/O",
            "Ensure security",
            "Schedule processes",
            "Manage memory"
        ],
        "answer": "Ensure security"
    },
    {
        "id": "d6ba84fc-a57e-4ece-8b19-74c0b57d7c8c",
        "category": "aptitude",
        "question": "What is the next number in the series: 2, 4, 8, 16, ??",
        "options": [
            "20",
            "32",
            "18",
            "24"
        ],
        "answer": "32"
    },
    {
        "id": "951f88ed-f8e5-4b63-a9de-08a56e7e7202",
        "category": "aptitude",
        "question": "What is the next number in the series: 1, 3, 5, 7, ??",
        "options": [
            "32",
            "18",
            "9",
            "24"
        ],
        "answer": "9"
    },
    {
        "id": "84be4646-cc2e-46bc-bb9c-f56dfdb296af",
        "category": "aptitude",
        "question": "What is the next number in the series: 10, 20, 30, 40, ??",
        "options": [
            "18",
            "24",
            "32",
            "50"
        ],
        "answer": "50"
    },
    {
        "id": "79a9a7b8-8115-4252-9fcb-dcd12e2df171",
        "category": "aptitude",
        "question": "What is the next number in the series: 5, 10, 20, 40, ??",
        "options": [
            "32",
            "24",
            "80",
            "18"
        ],
        "answer": "80"
    },
    {
        "id": "69a443dd-48d5-4706-a0bf-a66222b55e5b",
        "category": "aptitude",
        "question": "If a person walks 6 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "6 km/hr",
            "5 km/hr",
            "4 km/hr"
        ],
        "answer": "3 km/hr"
    },
    {
        "id": "56c0df42-8ff4-4ce5-ad08-e1dac1741545",
        "category": "aptitude",
        "question": "If a person walks 8 km in  2 hours, what is the speed?",
        "options": [
            "5 km/hr",
            "6 km/hr",
            "4 km/hr",
            "3 km/hr"
        ],
        "answer": "4 km/hr"
    },
    {
        "id": "aaee5734-5e4c-4c48-baaa-a155c05fe128",
        "category": "aptitude",
        "question": "If a person walks 10 km in  2 hours, what is the speed?",
        "options": [
            "4 km/hr",
            "5 km/hr",
            "3 km/hr",
            "6 km/hr"
        ],
        "answer": "5 km/hr"
    },
    {
        "id": "f5d40ffb-9e2c-4ee9-a352-fa56fcc9ab00",
        "category": "aptitude",
        "question": "If a person walks 12 km in  2 hours, what is the speed?",
        "options": [
            "3 km/hr",
            "5 km/hr",
            "6 km/hr",
            "4 km/hr"
        ],
        "answer": "6 km/hr"
    },
    {
        "id": "6cb1766d-ebcc-475c-bdd7-2c12e9be1267",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "e2c300ba-67af-404e-9347-1eb495bcf59b",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Ignore",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "8bf45abe-77e6-4f1e-9954-b9041f8ab999",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Late",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "78af3862-e320-4ad8-b6c8-565258d355ed",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Late",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "10d69535-154d-487c-9c28-bd919862ac25",
        "category": "dbms",
        "question": "Which SQL keyword is used to fetch data?",
        "options": [
            "UPDATE",
            "INSERT",
            "SELECT",
            "DELETE"
        ],
        "answer": "SELECT"
    },
    {
        "id": "cd70fe60-3d96-4f62-88e4-69d1c5f394d8",
        "category": "dbms",
        "question": "Which SQL keyword is used to modify data?",
        "options": [
            "UPDATE",
            "DELETE",
            "INSERT",
            "SELECT"
        ],
        "answer": "UPDATE"
    },
    {
        "id": "155c901e-ae78-45cf-9dff-01b65df14b58",
        "category": "dbms",
        "question": "Which SQL keyword is used to add new data?",
        "options": [
            "UPDATE",
            "SELECT",
            "DELETE",
            "INSERT"
        ],
        "answer": "INSERT"
    },
    {
        "id": "f5529487-1d97-40d0-b924-9fbc95e09cbb",
        "category": "dbms",
        "question": "Which SQL keyword is used to remove data?",
        "options": [
            "DELETE",
            "UPDATE",
            "SELECT",
            "INSERT"
        ],
        "answer": "DELETE"
    },
    {
        "id": "bd42631b-6410-4d70-bf20-9c7340419fb1",
        "category": "dbms",
        "question": "What is the 'A' in ACID properties?",
        "options": [
            "Consistency",
            "Atomicity",
            "Isolation",
            "Durability"
        ],
        "answer": "Atomicity"
    },
    {
        "id": "dd4645a0-a5d3-41b9-a34c-fed1d644c742",
        "category": "dbms",
        "question": "What is the 'C' in ACID properties?",
        "options": [
            "Isolation",
            "Consistency",
            "Atomicity",
            "Durability"
        ],
        "answer": "Consistency"
    },
    {
        "id": "9b8b89a6-f3a2-43ed-9e25-c4f9694a1839",
        "category": "dbms",
        "question": "What is the 'I' in ACID properties?",
        "options": [
            "Durability",
            "Isolation",
            "Consistency",
            "Atomicity"
        ],
        "answer": "Isolation"
    },
    {
        "id": "006afaa2-620d-4c41-92e5-2bc3e5bfd2a1",
        "category": "dbms",
        "question": "What is the 'D' in ACID properties?",
        "options": [
            "Atomicity",
            "Consistency",
            "Durability",
            "Isolation"
        ],
        "answer": "Durability"
    },
    {
        "id": "f674b30e-74cc-4fa3-9538-5891f2967086",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Panic",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "a7bab7a5-af85-46de-aab4-b1e96a2f601d",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Ignore",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "539c3037-6597-4f14-be39-1fb8abbc6ea4",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Late",
            "Procrastinate",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "340e5639-6b28-4517-9f93-2ec576808c3c",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Procrastinate",
            "Hardworking",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "dba02d3c-452e-46fe-893a-8bdc9fa32acf",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Ignore",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "8bd0fb69-6e9a-4e8b-af59-2be57a96dd55",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "367325af-1136-4c26-8b55-a089f69d5da7",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Late",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "eac92d15-4a56-4a38-b208-d733cc13ee16",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "0fb693f3-0197-4758-8d1e-6dc62e6258d1",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Ignore",
            "Blame others",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "898e0dde-5cbb-4ec7-bc8a-0700eae38b00",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "c7165dce-e447-49a2-9c38-10f55366d250",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Late",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "449c2eea-a9e0-4109-aef8-1160c5bbd2c1",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "58fc4c23-7a37-49d7-9cc7-84861dd7eed1",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Panic",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "d08b7db1-710f-4e98-ab6f-f437823ae731",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "4dd07aaf-59c1-4f2a-b1a6-b5389d8dc7ca",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Disorganized",
            "Procrastinate",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "ffb20936-79e8-4eec-805c-0a2b2b34627b",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Disorganized",
            "Hardworking",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "d8b8020c-44af-427d-957a-987e74d8d5d4",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "5518ccb8-fcb0-438e-ad39-a3b4da88d62e",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "b8dd1458-866a-42f3-bbcd-1a726602825e",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "87ce3dc2-927b-44d1-b2a4-2948a85a17f6",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Late",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "06bef18b-50bf-4257-94ce-a7c2012ab67d",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "25f40075-53b6-4f3f-9d27-d18b7c38a6d1",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "2a89156f-1b06-4e77-8bef-b2615348a72a",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "16e2c686-b666-4285-b1e7-48637717758a",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Late",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "53329c8b-125e-4b26-b308-4178e2e1e6e9",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "67274e64-5064-4457-80d4-23fcde9e81e6",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "52802726-0f33-4a78-91e7-29ec81b79d29",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Late",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "1446ec09-ee18-474f-81c5-ac68a74ed91b",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Hardworking",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "4a9c13cf-5c5b-4968-b583-0c25f28358bb",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Stay calm and solve",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "ae1f4b6f-0f2e-4caf-bc5b-27cc75458451",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Ignore",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "6f877d78-4d25-4bfa-a369-7545e11ff992",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Procrastinate",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "7cfbf994-fb2e-44b0-9259-6c2a3885608d",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Late",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "14857f83-3515-4b7a-8d51-76f366ee1102",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Ignore",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "486f3133-fdba-4f9d-aa5f-5dcff9bb970e",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Ignore",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "2cfa58db-931e-41b2-9e76-7c0fbc8190d4",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Late",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "d0062cbb-5a14-46d7-9753-0368cb755139",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "9a8a557f-b5d9-42b1-9983-b0b03942e889",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "1b4b4bf6-f627-4e84-96d4-101b3789b7d3",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Panic",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "15b0ce59-f867-472b-85a7-a53bdb298051",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "790657f5-a99f-4ce9-8e25-0f47234666b9",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Procrastinate",
            "Late",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "9d635fa4-b61d-482d-98b8-cc30b4202a54",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "a0a9649b-51b5-45f8-ac08-d5ed66fa14de",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "a615ae06-9b5c-4628-b7ca-ea97a010fa1c",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "65b7108d-6922-4f79-82f7-04ba58056fb9",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Late",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "b0a41014-f1be-4300-859a-8555b639f806",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Panic",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "1e79d005-e6c2-4ba1-85de-129be1c02e81",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "229cfead-62ec-4d2e-a02a-78a3458e6415",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Late",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "e1c9433f-3e7c-42c4-b630-74db54a79d39",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Procrastinate",
            "Hardworking",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "8208a72e-2823-4513-b71b-84996a36fec4",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Blame others",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "976fc5b2-e5a9-4137-b27c-a6c127daa2f4",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "4d94d2a3-cb98-4a35-bc83-8b155aebdb02",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "161759d8-3867-48f3-9764-d1df0f28d2ed",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Procrastinate",
            "Hardworking",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "850d823d-cd63-4e63-9b7b-a9aeb6964570",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Ignore",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "9b8684cb-4d71-4325-91f3-c83d4af212ce",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "2085bb7e-ab67-4109-a8d1-001523b9f865",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Procrastinate",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "a429e5a8-bffa-4ead-b0df-a6fe1f132a96",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Late",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "d44eb3f5-4d9c-4e9e-8092-792b7bffdb5d",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "4ebaba1d-1882-426b-b203-fbe9cde20539",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Stay calm and solve",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "edc03c4a-e51c-4a85-9093-2ca05bf4ce4a",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "d89f85e6-8d63-46a9-9c6c-43b96e2d3a1d",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Procrastinate",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "e17e426d-9dca-4a54-abe8-9038bdd89fb5",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "68a15e34-fb7d-42de-abc0-56d87f2a57af",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Panic",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "381b1252-3c0f-45e6-a264-26968e9584f5",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "9217eb8e-ff9f-4f0f-93d4-d9a38784d309",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Late",
            "Hardworking",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "04024aa3-088d-4872-be85-6cc9db0ac211",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "be674a22-3517-4f01-b9cf-3faf0556f30f",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "54f77bfc-3fb0-4cf5-83a0-184194e90a62",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "06d98035-8f32-4961-b27d-b2ba6a285ba2",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Late",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "8d7958ab-b959-428d-86b1-785f201f3cb8",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Ignore",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "5f764372-1485-4403-b912-2db2907e71b5",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Panic",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "2b955557-0302-42c7-9232-78b7cc0f1dcc",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Late",
            "Procrastinate",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "8e5dc7f2-0375-40a3-8c23-e06405dda95b",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Late",
            "Procrastinate",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "017d3e21-c065-4276-9a9f-95a01ec1ff69",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Stay calm and solve",
            "Ignore",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "0d96c15f-b17c-4b12-80d5-afd2df6737bc",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Stay calm and solve",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "f6fd0d76-02ac-4ba7-bec4-7aaccb1c540e",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Late",
            "Procrastinate",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "7a34db52-d8f9-4845-be07-12d13e93abdb",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Procrastinate",
            "Hardworking",
            "Disorganized"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "b6d10a4a-9c9e-439a-aef3-a3dc9b830bf0",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Panic",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "39dddd6b-6056-4f3e-8bfe-6ed65b5213a7",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Ignore",
            "Panic",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "5561766f-0dd8-4dff-9cba-375048a32413",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Late",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "eed80190-8506-4e8e-9eb8-7d1f003abc88",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Hardworking",
            "Disorganized",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "e7261e2e-1c5a-484f-831a-d7429363a261",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "644b3b41-5de9-4a98-9ce7-8f15bf672689",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Blame others",
            "Stay calm and solve",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "25a7f79d-63e4-48b0-bbdc-a66a6cafb844",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Procrastinate",
            "Disorganized",
            "Late",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "7121c4c6-d2b8-4a41-a540-7ffe840abae7",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Procrastinate",
            "Disorganized",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "58b4f593-8381-41ba-860d-f501fa850b93",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Stay calm and solve",
            "Ignore",
            "Panic",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "b2a774c7-5a59-4eff-bd5c-479244ea2e5a",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "5f8baed8-78d5-4da6-b6fe-ebc5c2ab62fc",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Procrastinate",
            "Late",
            "Hardworking"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "22f53935-8a16-474e-9612-b7df96a1f359",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Late",
            "Hardworking",
            "Disorganized",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "af7eea60-821f-42c8-9267-0a639f116d75",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Panic",
            "Stay calm and solve",
            "Blame others",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "b8c11301-bc1f-4057-94d3-7d3f0b3ddd9f",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Panic",
            "Ignore",
            "Blame others",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "63b26e34-100f-4e11-a420-ff8252bbd3bb",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Late",
            "Procrastinate"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "81824143-35e7-453c-ba3c-051a061eaaca",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "34af142c-12bd-492c-9002-7adea4bc181a",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Ignore",
            "Panic",
            "Stay calm and solve",
            "Blame others"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "987198cb-6f73-4185-9c9f-81a20d5bceec",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Blame others",
            "Panic",
            "Ignore",
            "Stay calm and solve"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "236d41af-da49-4631-81f8-f066a04cd80e",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "19edef7a-5986-4123-bf66-81222d025ee3",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Disorganized",
            "Hardworking",
            "Procrastinate",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "1205ff3e-152d-4dbe-aa69-82100e742472",
        "category": "hr",
        "question": "How would you handle a situation where a teammate disagrees with you?",
        "options": [
            "Blame others",
            "Ignore",
            "Stay calm and solve",
            "Panic"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "67414175-912e-4941-b058-b48fe7dc732f",
        "category": "hr",
        "question": "How would you handle a situation where a deadline is missed?",
        "options": [
            "Stay calm and solve",
            "Blame others",
            "Panic",
            "Ignore"
        ],
        "answer": "Stay calm and solve"
    },
    {
        "id": "0d9ffe0f-ca78-44f1-a300-495a1a394e0c",
        "category": "hr",
        "question": "What is your strength in teamwork?",
        "options": [
            "Hardworking",
            "Procrastinate",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    },
    {
        "id": "0540ade8-893b-4acc-aafe-d4bee0ceafc7",
        "category": "hr",
        "question": "What is your strength in problem solving?",
        "options": [
            "Procrastinate",
            "Hardworking",
            "Disorganized",
            "Late"
        ],
        "answer": "Hardworking"
    }
]
