```shell
# build main package
# generates "hello" executable file
go build -o main

# build and run main package
go run ./main.go

# format source code
go fmt
```

## Base points

1. Programs start running in package main by calling its function which also called main.
2. To import packages use `import`.
   ```go
   package main
   
   // By convention, the package name is the same as the last element of the import path. 
   // For instance, the "math/rand" package comprises files that begin with the statement package rand.
   
   import (
       "fmt"
       "math/rand"
   )
   
   func main() {
       fmt.Println("My favorite number is", rand.Intn(10))
   }
   ```
3. Import statements.
   ```go
   // Factored import statement
   
   import (
       "fmt"
       "math/rand"
   )

   // Multiple import statements

   import "fmt"
   import "math/rand"
   
   // It is preferred to use Factored style
   ```
   
4. In Go, a name is exported if it begins with a capital letter.
   ```go
   package mymath

   // When importing a package, you can refer only to its exported names. 
   // Any "unexported" names are not accessible from outside the package.
   
   // Exported function
   // Can be accessed outside "mymath" package
   
   func Add(x int, y int) int {
        return x + y
   }
   
   // Unexported function
   // Can be accessed only inside "mymath" package
   
   func add(x int, y int) int {
        return x + y
   }
   ```

