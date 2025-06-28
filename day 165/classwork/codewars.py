class Weird:
    def __eq__(self, other):
      
        return other is False or other is True or other is self.__neg__()
    
    def __bool__(self):
        return True 

    def __neg__(self):
        return self 

a = Weird()

