(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.birthDate = birthDate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ name, gender, birthDate, email, role }: UserProps) {
      super({ name, gender, birthDate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      name,
      gender,
      birthDate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      super({ name, gender, birthDate, email, role });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    name: "Fernando",
    gender: "M",
    birthDate: new Date("1999-04-05"),
    email: "fernando@google.com",
    role: "Admin",
    lastOpenFolder: "/usr/home",
    workingDirectory: "/home",
  });

  console.log({ userSettings });
})();
