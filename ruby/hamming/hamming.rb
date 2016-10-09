module BookKeeping
    VERSION = 3 # Where the version number matches the one in the test.
end

class Hamming

  def self.compute(string1,string2)
  
    if string1.length != string2.length
        raise ArgumentError.new("Strings must be of equal length")
    else
      i = 0
      count = 0

      while i < string1.length do

        if string1[i] != string2[i]
          count += 1
        end
        i += 1
      end
      return count
    end
  end
end
