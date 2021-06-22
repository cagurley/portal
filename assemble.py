import datetime as dt
import os
import re


try:
    newdir = os.path.join(
        'assemblage',
        dt.datetime.strftime(dt.datetime.now(), '%Y%m%d%H%M%S')
    )
    os.makedirs(newdir)
    for f in os.scandir('template'):
        if f.is_file():
            with open(f.path) as file:
                contents = file.read()
            mtags = re.findall(r'(([ \t]*)\{\!([\w\d\.]+)\!\})', contents)
            for mtag in mtags:
                with open(os.path.join('modules', mtag[2])) as mfile:
                    module = ''
                    for mline in mfile:
                        module += (mtag[1] + mline)
                    ctags = re.findall(r'(([ \t]*)\{\!([\w\d\.]+)\!\})', module)
                    for ctag in ctags:
                        with open(os.path.join('components', ctag[2])) as cfile:
                            component = ''
                            for cline in cfile:
                                component += (ctag[1] + cline)
                            module = module.replace(ctag[0], component)
                    contents = contents.replace(mtag[0], module)
            with open(os.path.join(newdir, f.name), 'w') as file:
                file.write(contents)
except (OSError, UnicodeDecodeError) as e:
    print(repr(e))
