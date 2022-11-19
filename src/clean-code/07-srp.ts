(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  interface UserSettingsProps extends UserProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthDate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    name: "Fernando",
    gender: "M",
    birthDate: new Date("1999-04-05"),
    email: "fernando@google.com",
    role: "Admin",
    lastOpenFolder: "/home",
    workingDirectory: "/usr/home",
  });

  console.log({ userSettings });
})();
