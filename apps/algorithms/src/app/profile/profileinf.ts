"use server"

export async function ProfileInf() {
  const profileInf = {
    src: {
      js: "https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black",
      ts: "https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white",
      node: "https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white",
      express:
        "https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge",
      react:
        "https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
      pg: "https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white",
      m_db: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white",
      npm: "https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm",
      github:
        "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github",
      c: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
    },
    social_media: {
      instagram:
        "https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white",
      linkedin:
        "https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white",
      github:
        "https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white",
      email:
        "https://img.shields.io/badge/email-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white",
      whatsapp:
        "https://img.shields.io/badge/whatsapp-%2388D57E.svg?&style=for-the-badge&logo=whatsapp&logoColor=white",
    },

    profile: {
      src: "https://avatars.githubusercontent.com/u/149837519?v=4",
      github:
        "https://github-readme-stats.vercel.app/api/top-langs/?username=kovarike&theme=radical&show_icons=true&hide_border=true&layout=compact",
    },
  };
  return profileInf;
}
