type RoleType = "all" | "administrator" | "user";
interface Role {
    name: string;
    value: RoleType;
}