class Animal:
    def __init__(self, name):
        self.name = name
        print(f"animal created: {self.name}")

class Mammal(Animal):
    def __init__(self, name, has_fur):
        super().__init__(name)
        self.has_fur = has_fur
        print(f"mammal created: {self.name}, has leather: {self.has_fur}")

class Dog(Mammal):
    def __init__(self, name, has_fur, breed):
        super().__init__(name, has_fur)
        self.breed = breed
        print(f"dog created: {self.name}, type: {self.breed}")
dog = Dog("bob", True, "boxer")
