// TODO: Remove file before api responses
const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      description: '"Poder Negro...Poder Negro"',
      userName: "Carlos Azocar",
      nameColor: "rgb(255, 250, 230)",
      avatar:
        "https://scontent.fscl11-2.fna.fbcdn.net/v/t1.0-9/72370536_546876726047468_5921603992340660224_o.jpg?_nc_cat=101&_nc_oc=AQnZjOcS1b08aYKqp-CQbKTXNeNVXGWgCR46tFSr_XhZvXHIOooJx2O4XdVlMzqnPjQ&_nc_ht=scontent.fscl11-2.fna&oh=5ba28ad72c833b6f3d88acfd544bd35a&oe=5ED2AE2B"
    },
    "task-2": {
      id: "task-2",
      description: '"Tremendos Malditos"',
      userName: "Alex Muñoz",
      nameColor: "rgb(227, 252, 239)",
      avatar:
        "https://scontent.fscl11-1.fna.fbcdn.net/v/t1.0-9/69342864_119109742772885_5995375093646098432_n.jpg?_nc_cat=111&_nc_oc=AQkv8BZRvatqaOlUGRB6-HCXQHmS15W99uXsZ1NO49TLeOAwbzdLppNzBr9YTb5TGvg&_nc_ht=scontent.fscl11-1.fna&oh=96178c5d0304f7850f1151ff7abe49a2&oe=5E94E4EF"
    },
    "task-3": {
      id: "task-3",
      description: '"Task 3"',
      userName: "Rodrigo Naranjo",
      nameColor: "rgb(222, 235, 255)",
      avatar:
        "https://scontent.fscl11-2.fna.fbcdn.net/v/t1.0-9/60472027_124129355444945_4538558883043475456_o.jpg?_nc_cat=102&_nc_oc=AQkUy2qlw2bRB7rQuz6d-YZufMUiun-cO6Y_wfOt8ctFM37CIppK1wFfJEjfBbYe7VQ&_nc_ht=scontent.fscl11-2.fna&oh=20f440a93017f297ef636a1e1acd41e5&oe=5E92AB94"
    },
    "task-4": {
      id: "task-4",
      description: '"Dejenme en paz, quiero dormi"',
      userName: "Natalia Mallega",
      nameColor: "rgb(234, 230, 255)",
      avatar:
        "https://scontent.fscl11-1.fna.fbcdn.net/v/t1.0-9/58378922_112404726628802_7606440716767592448_o.jpg?_nc_cat=105&_nc_oc=AQkwqIS4oS_eXmQQDghPqzfOy3ybFCnzXGWwoOFg3pzxR1N__7i1fC-p8ZLHfCQatQ8&_nc_ht=scontent.fscl11-1.fna&oh=6ee412a20bb5b2ae27b01596c5ace37a&oe=5ED3AF73"
    },
    "task-5": {
      id: "task-5",
      description: '"Que paso?"',
      userName: "Marian Cornielly",
      nameColor: "rgb(242, 144, 193)",
      avatar:
        "https://scontent.fscl11-1.fna.fbcdn.net/v/t1.0-9/26730762_103876083755225_14782518998118106_n.jpg?_nc_cat=104&_nc_oc=AQnHe5zVPTYqUeqwyMgXmRvH81Dfsg8BbqlQKqijgGwM5nM2TUcTfnlH6B6eVDQJW0A&_nc_ht=scontent.fscl11-1.fna&oh=e3dc52811f74e591c1669a5fc717795e&oe=5ED2DA83"
    },
    "task-6": {
      id: "task-6",
      description: '"Vamos al Burger?"',
      userName: "Felipe Suazo",
      nameColor: "rgb(120, 201, 10)",
      avatar:
        "https://scontent-scl2-1.xx.fbcdn.net/v/t1.0-9/57403915_108016533732170_6875927343051833344_o.jpg?_nc_cat=101&_nc_oc=AQnTa1wKnkRnZ2GVpimWQAQ4eRghsyH24_UOpayI0Q9_YO5oF0G0aHbpx4pODTXKR2E&_nc_ht=scontent-scl2-1.xx&oh=e048ccad7021b0c9c9784fc0cf169ed5&oe=5E98DBBF"
    },
    "task-7": {
      id: "task-7",
      description: '" Que chuchas?"',
      userName: "Edgardo Fredz",
      nameColor: "rgb(76, 160, 255)",
      avatar:
        "https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/61290984_121201209084074_1984391778286960640_n.jpg?_nc_cat=109&_nc_oc=AQkSslukA3WbqUhGsvkCVjy8LLX7M3-ncptNB_HYZd_XRyuVkBi-7ib2jrJ3qPjWkWI&_nc_ht=scontent-scl1-1.xx&oh=e21f9b87ad39e1da1ee337ae1fdfd874&oe=5ECFBD48"
    }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Weas To Do",
      tasksIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-6", "task-7"]
    },
    "column-2": {
      id: "column-2",
      title: "Weas In progress",
      tasksIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Weas Done",
      tasksIds: []
    }
  },
  columnsOrder: ["column-1", "column-2", "column-3"]
};

export default initialData;
