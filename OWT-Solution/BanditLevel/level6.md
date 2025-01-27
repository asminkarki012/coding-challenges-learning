# level6->level7


``` bash
ssh bandit6@bandit.labs.overthewire.org -p 2220
use password from prev level
```

### The password for the next level is stored somewhere on the server and has all of the following properties:
    owned by user bandit7
    owned by group bandit6
    33 bytes in size

### SOLUTION:
``` bash
ls -ll | cut -d' ' -f3
```

password for level 7:

