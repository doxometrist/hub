

export type Presence = {
  link: string,
  description: string,
  title: string
}

const subtackProfile: Presence = {
  link: "https://doxometrist.substack.com/",
  description: "That's where I post",
  title: "My subtack"
};


export const presences: Presence[] = [
  subtackProfile

]
