const data = [
    {
        id: "1",
        name: "CEO",
        children: [
            {
                id: "2",
                name: "CTO",
                children: [
                    {
                        id: "5",
                        name: "Dev Manager",
                        children: [
                            { id: "9", name: "Frontend Dev", children: [] },
                            { id: "10", name: "Backend Dev", children: [] }
                        ]
                    }
                ]
            },
            {
                id: "3",
                name: "CFO",
                children: [
                    {
                        id: "6",
                        name: "Account Manager",
                        children: [
                            { id: "11", name: "Accountant", children: [] }
                        ]
                    }
                ]
            },
            {
                id: "4",
                name: "COO",
                children: [
                    {
                        id: "7",
                        name: "Operations Lead",
                        children: [
                            {
                                id: "12",
                                name: "Logistics Manager",
                                children: []
                            }
                        ]
                    },
                    {
                        id: "8",
                        name: "Support Lead",
                        children: []
                    }
                ]
            }
        ]
    }
];

function printIndented(data, level = 0) {
    for (const item of data) {
        if (item.children && item.children.length > 0) {
            printIndented(item.children, level + 1)
        }
        console.log(' '.repeat(level) + item.name);
    }
}

printIndented(data);