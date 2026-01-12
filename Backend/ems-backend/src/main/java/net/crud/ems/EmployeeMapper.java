package net.crud.ems;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeMapper {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}
