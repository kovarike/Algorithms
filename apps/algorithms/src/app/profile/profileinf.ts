"use server"

export async function ProfileInf() {
  const profileInf = {
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
