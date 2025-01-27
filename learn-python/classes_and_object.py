# https://www.learnpython.org/en/Classes_and_Objects
# define the Vehicle class
class Vehicle:
    def __init__(self, name: str, color: str, kind: str, value: float):
        self.name = name
        self.kind = kind
        self.color = color
        self.value = value

    def description(self) -> str:
        desc_str = "%s is a %s %s worth $%.2f." % (
            self.name,
            self.color,
            self.kind,
            self.value,
        )
        return desc_str


# your code goes here
# test code
car1 = Vehicle("Fer", "red", "convertible", 60000.00)
car2 = Vehicle("Jump", "blue", "van", 10000.00)
print(car1.description())
print(car2.description())
