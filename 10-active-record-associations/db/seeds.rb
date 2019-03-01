sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")

jd = Doctor.find_or_create_by(name: "John Dorian", specialty: "Internal Medicine", hospital: sacred_heart)
elliot = Doctor.find_or_create_by(name: "Elliot Reed", specialty: "Endocrinology", hospital: sacred_heart)
turk = Doctor.find_or_create_by(name: "Chris Turk", specialty: "Surgery", hospital: sacred_heart)

wilke = Patient.find_or_create_by(name: "Mrs. Wilke")
johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimer's Patient")
pickles = Patient.find_or_create_by(name: "Mr Pickles")

wilke.doctors << jd
johnny.doctors << jd
pickles.doctors << jd
pickles.doctors << elliot

binding.pry
0